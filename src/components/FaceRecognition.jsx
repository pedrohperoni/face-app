import "../styles/faceRecognition.css"
import { FaceRecogHeader } from "./FaceRecogHeader"


export function FaceRecognition({ imageUrl, box }){
  return (
    <div className="faceContainer">
    <FaceRecogHeader />
      <div className="faceRecognitionContainer">
        <img id='inputImage' src={imageUrl} alt='face' width='500px' height='auto'/>
        <div className='bounding-box' style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}>
          </div>
      </div> 
    </div>
  )
}