import { Video_player } from "./Styles";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { Ivideo } from "../../interface";
import { axiosInstance } from "../../components/network/axios";
import { useQuery } from "@tanstack/react-query";
import { APIKEYS } from "../../components/network/reactQuery/ApiKeys";
import { useNavigate } from "react-router-dom";
import Loader2 from "../../components/loader2/Loader2";

const Vplayer = () => {
  //get movies id
  const ID = JSON.parse(localStorage.getItem("ID") as string);

  const T = JSON.parse(localStorage.getItem("media_type") as string);

  //fetch TV details
  const [Video_url, setVideo_url] = useState<Ivideo[]>([]);
  let [Res, setRes] = useState<Ivideo[]>([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ErrorMsg, setErrorMsg] = useState<string>("");

  //fetch Latest movies
  const { data } = useQuery({
    queryKey: [APIKEYS.video],
    queryFn: () => getVideo(ID, T),
  });
  const getVideo = async (id: number, type: string) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `${type ? `${type}/${id}/videos` : null}`
      );
      return response.data.results;
    } catch (error: any) {
      setErrorMsg(error.message);
      setRes([]);
    } finally {
      setIsLoading(false);
    }
  };

  //get video key
  const getKey = (V: Ivideo[]) => {
    if (!V) return;
    const Data = V.filter((v) => {
      if (v.site === "YouTube" && v.type === "Trailer") {
        return v;
      }
    });
    Res = Data;
  };

  getKey(Video_url);

  //get first movie trailer
  const getFirstTrailer = (Res: Ivideo[]) => {
    for (let i = 0; i < Res.length; i++) {
      let Fkey = Res[0].key;
      return Fkey;
    }
  };

  //first trailer string
  const R = getFirstTrailer(Res);

  useEffect(() => {
    if (data) setVideo_url(data);
  }, [data]);

  return (
    <>
      {ErrorMsg && <Loader2 children={`${ErrorMsg}`} isLoad={isLoading} />}
      {isLoading && <Loader2 children="Loading..." isLoad={isLoading} />}
      <Video_player>
        <img
          src="/icon/arrow-left-solid.svg"
          alt=""
          onClick={() =>
            window.history ? window.history.back() : navigate("/")
          }
        />
        <div>
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://www.youtube.com/watch?v=${R}`}
          />
        </div>
      </Video_player>
    </>
  );
};

export default Vplayer;
