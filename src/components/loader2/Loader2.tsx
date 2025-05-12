
import { Loader2_Styles } from './Style'
import { ILoader } from '../../interface'
const Loader2:React.FC<ILoader> = ({children}) => {
  return (
    <Loader2_Styles>
      {children}
    </Loader2_Styles>
  )
}

export default Loader2
