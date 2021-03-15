import '../styles/mainContainer.css'
import { FaceRecognition } from './FaceRecognition'
import { SubmitContainer } from './SubmitContainer'
import { TitleContainer } from './TitleContainer'


export function MainContainer({ onInputChange, onButtonSubmit, imageUrl, box }){
  return(
    <div className='mainContainer'>
      <section>
      <TitleContainer />
      <SubmitContainer
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit} />
      <FaceRecognition
        box={this.state.box} 
        imageUrl={this.state.imageUrl}
      />
      </section>
    </div>
  )
}