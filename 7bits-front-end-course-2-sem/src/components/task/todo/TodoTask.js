import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

import './style.css';
import ManipulateButton from "../../buttons/manipulate/ManipulateButton";

export default class TodoTask extends React.Component {

    render() {
        return (
            <Task id={this.props.id} title={this.props.title} checkButtonClassName={'unchecked-button'} editButton={
                <ManipulateButton id={this.props.id} buttonName={'edit'}/>
            }/>
        );
    }
};

TodoTask.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};