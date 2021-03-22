import "../styles/faceRecognition.css"

export function FaceRecognition({ imageUrl, box, faceCount }){

  return (
    <div className="faceContainer">
    <p className='faceCounter'>{faceCount}</p>
      <div className="faceRecognitionContainer">
        <img id='inputImage' src={imageUrl} alt=''/>
         { box !== undefined &&
            box.map(box => {
             return <div key={box.topRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      	    })
      	  }
      </div> 
    </div>
  );
}