
import { Loader2_Styles } from './Style'
import { ILoader } from '../../interface'
import { ButtonS } from '../Button'

const Loader2:React.FC<ILoader> = ({children, isLoad}) => {

  return (
    <Loader2_Styles>
      <div>{children}</div>
      {!isLoad &&  <ButtonS children='Reload' size='50%'  color='#fff' onClick={()=>window.location.reload()}/>}
    </Loader2_Styles>
  )
}

export default Loader2
