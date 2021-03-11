import '../styles/header.css'

export function Header(){
  return(
    <header>
    <div className='headerLogo'>
      <h2>faceApp</h2>
    </div>
    <div className='headerHyperlinks'>
      <a href='http://localhost:3000/'>Ranking</a>
      <a href='https://www.clarifai.com/'>API</a>
      <a href ='https://github.com/pedrohperoni'>github</a>
    </div>
    <div className='headerButton'>
      <button className='signInButton'>Sign In</button>
    </div>
    </header>
  )
}
