import { ICom } from "../../interface";
import { Company_styles } from "./Styles";


interface Props {
  data: ICom[];
}

const Company:React.FC<Props> = ({data}) => {

  return (
    <Company_styles>
      {data.map((C, i) => (
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
