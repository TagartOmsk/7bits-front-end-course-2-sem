import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';

import './style.css';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className={`main ${this.props.type}`}>
          <SideBar className='main__side-bar'/>
          <section className='main__content'>
            {this.props.children}
          </section>
        </main>
      </React.Fragment>
    );
  }
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};
