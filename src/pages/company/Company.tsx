import { useEffect, useState } from "react";
import { ICom } from "../../interface";
import { Company_styles } from "./Styles";
import { ApiResponse } from "../../components/network/ApiResponse";
import { APIKEYS } from "../../components/network/reactQuery/ApiKeys";
import { axiosInstance } from "../../components/network/axios";
import { API_ROUTES } from "../../components/network/reactQuery/ApiRouts";
import { useQuery } from "@tanstack/react-query";

const Company = () => {
  //get movies id
  const ID = JSON.parse(localStorage.getItem("ID") as string);
  const [Com, setCom] = useState<ICom[]>([]);

  //fetch Latest movies
  const { data } = useQuery({
    queryKey: [APIKEYS.company, ID],
    queryFn: () => getMoviesOV(ID),
  });

  const getMoviesOV = async (id: number) => {
    try {
      const response = await axiosInstance.get<ApiResponse<ICom>>(
        `${API_ROUTES.movieInfo}${id}`
      );
      return response.data.production_companies;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data) setCom(data);
  }, [data]);

  return (
    <Company_styles>
      {Com.map((C, i) => (
        <div key={i}>
          <img
            src={`https://image.tmdb.org/t/p/w500${C.logo_path}`}
            alt="picture"
          />
          <span>{C.name}</span>
        </div>
      ))}
    </Company_styles>
  );
};

export default Company;
