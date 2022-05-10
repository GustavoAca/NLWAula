import { GithubLogo } from 'phosphor-react';
import './NavBar.css';

export function NavBar() {
  return (
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1 >Widget de suporte </h1>
          <a href="https://github.com/GustavoAca">
            <div className="dsmovie-contact-container p-4 bg-brand-500 rounded-xl hover:bg-zinc-500 transition-colors border-brand-500  ">
              <GithubLogo  />
              <p className='dsmovie-contact-link'>/GustavoAca</p>
            </div>
          </a>
        </div>
      </nav>
    </header>

  )
}