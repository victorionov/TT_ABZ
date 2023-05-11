import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className='header'>
      <a href="/" className='logo-link'>
        <img className='logo'src="/logo/logo.png" alt="Website logo" />
      </a>
      <div className='buttons'>
        <button className="button">Users</button>
        <button className="button">Sign up</button>
      </div>
    </div>
  )
}