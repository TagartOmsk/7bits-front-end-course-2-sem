import React from "react";
import PropTypes from 'prop-types';

import './style.css';

export default class ManipulateButton extends React.Component {

    render() {

        const {id, buttonName} = this.props;

        return (
            <button onClick={() => alert(id)} className={`manipulate-button${buttonName ? ` ${buttonName}-button` : ''}`}/>
        )
    };

};

ManipulateButton.propTypes = {
  id: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired
};

ManipulateButton.defaultProps = {
  buttonName: ''
};