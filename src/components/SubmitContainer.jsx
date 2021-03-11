import '../styles/submitContainer.css';

export function SubmitContainer({ onInputChange, onButtonSubmit, imageUrl, box }){
  return(
    <div className='dynamicContainer'>
      <div className='submitContainer'>
        <input type='text' placeholder='Enter a photo URL' className='submitInput' onChange={onInputChange}></input>
        <button className='submitButton' onClick={onButtonSubmit}>Submit</button>
      </div>
      <div className='faceImageContainer'>
        <img id='inputImage' className='faceImage' src={imageUrl} alt='faceImage'></img>
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