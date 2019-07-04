import React from 'react';
import PropTypes from 'prop-types';

import CheckButton from '../buttons/check/CheckButton'

import './style.css';
import ManipulateButton from "../buttons/manipulate/ManipulateButton";

export default class Task extends React.Component {

  render() {

    const {id, checkButtonClassName, editButton, onRemove, onCheck, field} = this.props;

    return (
      <article className="task">
        <div className={'check-title-keeper'}>
            <CheckButton className={checkButtonClassName} onCheck={function() {onCheck(id)}}/>
            {field}
        </div>
        <div className={'button-keeper'}>
            {editButton}
            <ManipulateButton onClick={function() {onRemove(id)}} buttonName={'remove'}/>
        </div>
      </article>
    );
  }
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    checkButtonClassName: PropTypes.string.isRequired,
    editButton: PropTypes.element,
    field: PropTypes.element,
    onRemove: PropTypes.func,
    onCheck: PropTypes.func
};
