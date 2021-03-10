import '../styles/submitContainer.css';

export function SubmitContainer(){
  return(
    <div className='submitContainer'>
      <input placeholder='Enter a photo URL' className='submitInput'></input>
      <button className='submitButton'>Submit</button>
    </div>
  )
}