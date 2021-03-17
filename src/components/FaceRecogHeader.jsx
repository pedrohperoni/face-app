import '../styles/faceRecogHeader.css'

export function FaceRecogHeader(){
  return(
    <div className='faceHeader'>
      <header>
        <a href='http://localhost:3000/'>Ranking</a>
        <a href='https://www.clarifai.com/'>API</a>
        <a href ='https://github.com/pedrohperoni'>github</a>
      </header>
    </div>
  )
}