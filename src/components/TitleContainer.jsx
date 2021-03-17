import '../styles/titleContainer.css'
import { TitleHeader } from './TitleHeader'

export function TitleContainer(){
  return(
    <div className='titleContainer'>
      <div className='titleContent'>
        <TitleHeader />
        <h1>This app will detect<br></br> 
        faces in pictures,<br></br> 
        give it a try!</h1>
      </div>
    </div>
  )
}