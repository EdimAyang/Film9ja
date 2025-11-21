import { OverView_styles } from "./Styles";

interface Props {
  data?:string;
}
const Overview:React.FC<Props> = ({data}) => {
  return (
    <OverView_styles>
      <p>{data}</p>
    </OverView_styles>
  );
};

export default Overview;
