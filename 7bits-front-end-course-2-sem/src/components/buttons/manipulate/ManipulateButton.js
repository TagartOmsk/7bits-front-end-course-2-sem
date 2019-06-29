import React from "react";
import PropTypes from 'prop-types';

import './style.css';

export default class ManipulateButton extends React.Component {

    render() {

        const {buttonName, onClick} = this.props;

        return (
            <button onClick={() => onClick()} className={`manipulate-button${buttonName ? ` ${buttonName}-button` : ''}`}/>
        )
    };

};

ManipulateButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

ManipulateButton.defaultProps = {
  buttonName: ''
};