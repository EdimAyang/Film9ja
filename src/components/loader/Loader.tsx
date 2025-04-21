import React from 'react'
import { Loader_Style } from './Style'
import { ILoader } from '../../interface'



const Loader:React.FC<ILoader> = ({children, ref}) => {
  return (
    <Loader_Style ref={ref}>
      {children}
    </Loader_Style>
  )
}

export default Loader
