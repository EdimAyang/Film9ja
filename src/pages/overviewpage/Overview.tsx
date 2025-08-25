import { useState, useEffect } from "react";
import { OverView_styles } from "./Styles";
import { IMovieTv } from "../../interface";
import { ApiResponse } from "../../components/network/ApiResponse";
import { APIKEYS } from "../../components/network/reactQuery/ApiKeys";
import { axiosInstance } from "../../components/network/axios";
import { API_ROUTES } from "../../components/network/reactQuery/ApiRouts";
import { useQuery } from "@tanstack/react-query";


const Overview = () => {
  //get movies id
  const ID = JSON.parse(localStorage.getItem("ID") as string);
  const [overView, setOV] = useState<IMovieTv>();

  //fetch Latest movies
  const { data } = useQuery({
    queryKey: [APIKEYS.overview, ID],
    queryFn: () => getMoviesOV(ID),
  });
  const getMoviesOV = async (id: number) => {
    try {
      const response = await axiosInstance.get<ApiResponse<IMovieTv>>(
        `${API_ROUTES.movieInfo}${id}`
      );
      return response.data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(data)setOV(data)
  }, [data]);

  return (
    <OverView_styles>
      <p>{overView?.overview}</p>
    </OverView_styles>
  );
};

export default Overview;
