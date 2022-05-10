import { GithubLogo } from 'phosphor-react';
import './NavBar.css';

export function NavBar() {
  return (
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>Widget de suporte </h1>
          <a href="https://github.com/GustavoAca">
            <div className='dsmovie-contact-container'>
              <GithubLogo className="w-20h-20" />
              <p className='dsmovie-contact-link'>/GustavoAca</p>
            </div>
          </a>
        </div>
      </nav>
    </header>

  )
}