import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import logo from '../../../../logo.png'

export default class Header extends React.Component {
  render() {

      const {user} = this.props;

    return (
      <header className='header'>
        <div className='header__content'>
            <img className='header__logo' alt='logo' src={logo}/>
            <a href={'/'} className={'header__user'}>{user}</a>
        </div>
      </header>
    );
  };
};

Header.propTypes = {
    user: PropTypes.string.isRequired
};

Header.defaultProps = {
    user: "Johny"
};