import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class SideBar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <aside className={`side-bar${className ? ` ${className}` : ''}`}>
          <ul className='side-bar__link-list'>
              <li className='side-bar__elem'><a className='side-bar__link' href='/'>To Do</a></li>
              <li className='side-bar__elem'><a className='side-bar__link' href='/'>Done</a></li>
          </ul>
      </aside>
    );
  };
};

SideBar.propTypes = {
  className: PropTypes.string
};

SideBar.defaultProps = {
  className: ''
};
