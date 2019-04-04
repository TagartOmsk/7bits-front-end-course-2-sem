import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.css';

export default class SideBar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <aside className={`side-bar${className ? ` ${className}` : ''}`}>
          <ul className='side-bar__link-list'>
              <li className='side-bar__elem'>
                  <NavLink
                      exact
                      to={'/'}
                      className={'side-bar__link side-bar__link-todo'}
                      activeClassName={'side-bar__link_active side-bar__link-todo_active'}
                  >
                      To Do
                  </NavLink>
              </li>
              <li className='side-bar__elem'>
                  <NavLink
                      to={'/done'}
                      className={'side-bar__link side-bar__link-done'}
                      activeClassName={'side-bar__link_active side-bar__link-done_active'}
                  >
                      Done
                  </NavLink>
              </li>
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
