import React from "react";
import PropTypes from 'prop-types';

import './style.css';

export default class CheckButton extends React.Component {

    render() {

        const {id, className} = this.props;

        return (
            <button onClick={() => alert(id)} className={`check-button${className ? ` ${className}` : ''}`}/>
        )
    };
};

CheckButton.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string
};

CheckButton.defaultProps = {
    className: ''
};