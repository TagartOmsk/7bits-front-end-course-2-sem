import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

import './style.css';

export default class DoneTask extends React.Component {
    render() {
        return (
            <Task id={this.props.id} title={this.props.title} checkButtonClassName={'checked-button'}/>
        );
    }
};

DoneTask.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
