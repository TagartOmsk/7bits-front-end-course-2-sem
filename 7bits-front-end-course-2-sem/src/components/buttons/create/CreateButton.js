import React from "react";
import PropTypes from 'prop-types';

import './style.css';

export default class CreateButton extends React.Component {

    render() {

        const {className, type, value, disabled} = this.props;

        return (
            <button type={type} disabled={disabled} className={`create-button${className ? ` ${className}` : ''}`}>{value}</button>
        )
    }
}

CreateButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool
};

CreateButton.defaultProps = {
    className: '',
    type: 'submit',
    value: 'Create',
    disabled: false
};