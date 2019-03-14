import React from 'react';

import './style.css';

import logo from '../../../../logo.png'

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header__content'>
            <img className='header__logo' alt='logo' src={logo}/>
        </div>
      </header>
    );
  };
};
