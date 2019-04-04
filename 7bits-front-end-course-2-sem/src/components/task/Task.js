import React from 'react';
import PropTypes from 'prop-types';

import CheckButton from '../buttons/check/CheckButton'

import './style.css';
import ManipulateButton from "../buttons/manipulate/ManipulateButton";

export default class Task extends React.Component {
  render() {

    const {title, checkButtonClassName, editButton} = this.props;

    return (
      <article className="task">
        <div className={'check-title-keeper'}>
            <CheckButton className={checkButtonClassName}/>
            <h3 className="task__title">{title}</h3>
        </div>
        <div className={'button-keeper'}>
            {editButton}
            <ManipulateButton buttonName={'remove'}/>
        </div>
      </article>
    );
  };
};

Task.propTypes = {
    title: PropTypes.string,
    checkButtonClassName: PropTypes.string.isRequired,
    editButton: PropTypes.element
};
