import { Video_player } from "./Styles";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { Ivideo } from "../../interface";
import { axiosInstance } from "../../components/network/axios";
import { useQuery } from "@tanstack/react-query";
import { APIKEYS } from "../../components/network/reactQuery/ApiKeys";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../../router/loader";
import { ArrowLeftIcon } from "lucide-react";

const Vplayer = () => {
  const persistedData = JSON.parse(localStorage.getItem("id-media-storage")!);
  const { id, mediaType } = persistedData.state;

  //fetch TV details
  const [Video_url, setVideo_url] = useState<Ivideo[]>([]);
  let [Res, setRes] = useState<Ivideo[]>([]);
  const navigate = useNavigate();

  //fetch Latest movies
  const { data, isPending, isError, error } = useQuery({
    queryKey: [APIKEYS.video, id, mediaType],
    queryFn: () => getVideo(id, mediaType),
    enabled: !!id && !!mediaType,
  });

  
  const getVideo = async (id: number, type: string) => {
    const { data } = await axiosInstance.get(
      `${type ? `${type}/${id}/videos` : null}`
    );
    return data.results;
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

  const handleError = () => {
    setRes([]);
    toast.error("Video not available") || toast.error((error as Error).message);
    navigate(-1);
  };

  return (
    <>
      {isError && handleError()}
      {isPending && <Loader />}
      <Video_player>
        <ArrowLeftIcon
          style={{color:'#fff'}}
          onClick={() =>
            window.history ? navigate(-1) : navigate("/")
          }
        />
        <div>
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            url={`https://www.youtube.com/embed/${R}`}
            light={false}
          />
        </div>
      </Video_player>
    </>
  );
};

export default Vplayer;
