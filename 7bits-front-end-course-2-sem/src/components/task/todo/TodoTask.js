import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

import './style.css';
import ManipulateButton from "../../buttons/manipulate/ManipulateButton";

export default class TodoTask extends React.Component {

    render() {
        const {id, onRemove, onCheck, textFragment, onEdit, text, editType} = this.props;

        return (
            <Task field={textFragment}
                  onCheck={onCheck} onRemove={onRemove} id={id}
                  checkButtonClassName={'unchecked-button'} editButton={
                <ManipulateButton onClick={function() {onEdit(id, text)}} buttonName={editType}/>
            }/>);
    }
};

TodoTask.propTypes = {
    id: PropTypes.string.isRequired,
    onRemove: PropTypes.func,
    onCheck: PropTypes.func,
    textFragment: PropTypes.element,
    onEdit: PropTypes.func,
    text: PropTypes.string,
    editType: PropTypes.string
};

TodoTask.defaultProps = {
    id: '',
    text: ''
};