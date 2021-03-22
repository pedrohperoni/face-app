import '../styles/titleHeader.css'
import logo from '../face-recognition.svg'

export function TitleHeader(){
  return(
    <div className="titleHeader">
      <div className="logoContainer">
        <img id='logo' src={logo} alt='logo'></img>
        <h3>
          faceApp
        </h3>
        </div>
      <div className="buttonsContainer">
        <a href='https://www.clarifai.com/'>clarifai API</a>
        <a href ='https://github.com/pedrohperoni'>github</a>
      </div>
    </div>
  )
}