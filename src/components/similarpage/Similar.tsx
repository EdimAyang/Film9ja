import { Similar_styles } from "./Style";
import { ICategories } from "../../interface";
import { ApiResponse } from "../network/ApiResponse";
import { axiosInstance } from "../network/axios";
import { useSuspenseQuery } from "@tanstack/react-query";

const Similar = () => {
  const persistedData = JSON.parse(localStorage.getItem("id-media-storage")!);
  const {id , mediaType} = persistedData.state

  const getMoviesOV = async (id: any, mediatype:string) => {
    const { data } = await axiosInstance.get<ApiResponse<ICategories[]>>(
      `${mediatype}/${id}/similar`
    );
    return data.results;
  };


  //fetch Latest movies
  const { data } = useSuspenseQuery({
    queryKey: ["similar", id],
    queryFn: () => getMoviesOV(id, mediaType),
  });

  return (
    <Similar_styles>
      {data.map((S, i) => (
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
