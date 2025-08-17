import { Similar_styles } from "./Style";
import { useEffect, useState } from "react";
import { ICategories } from "../../interface";
import { ApiResponse } from "../../components/network/ApiResponse";
import { APIKEYS } from "../../components/network/reactQuery/ApiKeys";
import { axiosInstance } from "../../components/network/axios";
import { API_ROUTES } from "../../components/network/reactQuery/ApiRouts";
import { useQuery } from "@tanstack/react-query";

const Similar = () => {
  //get movies id
  const ID = JSON.parse(localStorage.getItem("ID") as string);
  const [Similar, setSimilar] = useState<ICategories[]>([]);

  //fetch Latest movies
  const { data } = useQuery({
    queryKey: [APIKEYS.similar, ID],
    queryFn: () => getMoviesOV(ID),
  });
  const getMoviesOV = async (id: number) => {
    try {
      const response = await axiosInstance.get<ApiResponse<ICategories[]>>(
        `${API_ROUTES.movieInfo}${id}/similar`
      );
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data) setSimilar(data);
  }, [data]);

  return (
    <Similar_styles>
      {Similar.map((S,i) => (
        <div key={i}>
          <img
            src={`https://image.tmdb.org/t/p/w500${S.poster_path}`}
            alt="picture"
          />
          <span>
            {S.name || S.original_name || S.original_title || S.title}
          </span>
        </div>
      ))}
    </Similar_styles>
  );
};

export default Similar;
