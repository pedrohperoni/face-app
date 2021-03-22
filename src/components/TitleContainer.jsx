import '../styles/titleContainer.css'


export function TitleContainer({ onInputChange, onButtonSubmit }){
  return(
    <div className='titleContainer'>
      <div className='titleContent'>
        <h1>This app will detect and find faces in images, try it out!</h1>
        <div className='submitContainer'>
          <input type='text' placeholder='Enter a photo URL' className='submitInput' onChange={onInputChange}></input>
          <button className='submitButton' onClick={onButtonSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}