import "../styles/faceRecognition.css"

export function FaceRecognition({ imageUrl, box }){

  return (
    <div className="faceContainer">
      <div className="faceRecognitionContainer">
        <img id='inputImage' src={imageUrl} alt=''/>
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