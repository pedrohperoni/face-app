import { SubmitContainer } from "./SubmitContainer";
import { TitleContainer } from "./TitleContainer";
import '../styles/mainContainer.css'


export function MainContainer(){
  return(
    <div className='mainContainer'>
      <section>
      <TitleContainer />
      <SubmitContainer />
      </section>
    </div>
  )
}