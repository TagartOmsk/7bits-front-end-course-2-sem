import React from "react";
import PropTypes from 'prop-types';

import './style.css';

export default class CheckButton extends React.Component {

    render() {

        const {className, onCheck} = this.props;

        return (
            <button onClick={() => onCheck()} className={`check-button${className ? ` ${className}` : ''}`}/>
        );
    }
}

CheckButton.propTypes = {
    className: PropTypes.string,
    onCheck: PropTypes.func
};

CheckButton.defaultProps = {
    className: ''
};