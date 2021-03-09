import '../styles/header.css'

export function Header(){
  return(
    <header>
    <div className='headerLogo'>
      <h2>LOGO</h2>
    </div>
    <div className='headerHyperlinks'>
      <a>Ranking</a>
      <a href='https://www.clarifai.com/'>API</a>
      <a href ='https://github.com/pedrohperoni'>github</a>
    </div>
    <div className='headerButton'>
      <button className='signInButton'>Sign In</button>
    </div>
    </header>
  )
}
