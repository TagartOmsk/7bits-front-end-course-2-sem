import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

import './style.css';

export default class DoneTask extends React.Component {
    render() {
        return (
            <Task field={
                <h3 className="task__title">{this.props.title}</h3>
            }
                onCheck={(id) => console.log(id)} onRemove={this.props.onRemove} id={this.props.id} checkButtonClassName={'checked-button'}/>
        );
    }
};

DoneTask.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onRemove: PropTypes.func
};
