import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';

import './style.css';

export default class Base extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className='main'>
          <SideBar className='main__side-bar'/>
          <section className='main__content'>
            {this.props.children}
          </section>
        </main>
      </React.Fragment>
    );
  };
};

Base.propTypes = {
  children: PropTypes.node.isRequired
};
