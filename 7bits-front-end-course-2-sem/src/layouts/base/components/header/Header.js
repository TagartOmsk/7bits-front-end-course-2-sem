import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import './style.css';

import logo from '../../../../logo.png'
import whoami from "../../../../actions/user/whoami";

class Header extends React.Component {
  render() {

    return (
      <header className='header'>
        <div className='header__content'>
            <img className='header__logo' alt='logo' src={logo}/>
            <a href={'/'} className={'header__user'}>{this.props.username}</a>
        </div>
      </header>
    );
  };
}

const mapStateToProps = (state) => ({
    username: state.userReducer.username
});

const mapDispatchToProps = (dispatch) => ({
    whoami: bindActionCreators(whoami, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

