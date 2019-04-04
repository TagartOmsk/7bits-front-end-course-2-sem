import React from "react";
import PropTypes from 'prop-types';

import './style.css';

export default class CheckButton extends React.Component {

    render() {

        const { className } = this.props;

        return (
            <button className={`check-button${className ? ` ${className}` : ''}`}/>
        )
    };
};

CheckButton.propTypes = {
    className: PropTypes.string
};

CheckButton.defaultProps = {
    className: ''
};