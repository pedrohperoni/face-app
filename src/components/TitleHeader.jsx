import '../styles/titleHeader.css'
import logo from '../face-recognition.svg'

export function TitleHeader(){
  return(
    <div className="titleHeader">
      <img id='logo' src={logo} alt='logo'></img>
      <h3>
        faceApp
      </h3>
    </div>
  )
}