import { useState } from 'react';
import nftPNG from './assets/nft.png'

import './style.css'

function App() {
  const [email, setEmail] = useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Bem vindo!</span>

            <span className="login-form-title">
              <img src={nftPNG} alt="nft" />
            </span>

            <div className='wrap-input'>
              <input className="input" type="email" />
              <span className='focus-input' data-placeholder="email"></span>
            </div>

            <div className='wrap-input'>
              <input className="input" type="password" />
              <span className='focus-input' data-placeholder="password"></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>

            <div className='text-center'>
              <span className="text1">Não possui conta?</span>

              <a className="text2" href="#">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
