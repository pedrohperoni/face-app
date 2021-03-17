import '../styles/submitContainer.css';

export function SubmitContainer({ onInputChange, onButtonSubmit }){
  return(
    <div className='submitContainer'>
      <div className='submitContent'>
        <input type='text' placeholder='Enter a photo URL' className='submitInput' onChange={onInputChange}></input>
        <button className='submitButton' onClick={onButtonSubmit}>Submit</button>
      </div>
    </div>
  )
}