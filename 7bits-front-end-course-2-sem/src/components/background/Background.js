import React from "react";
import PropTypes from 'prop-types';

import "./style.css";

export default class Background extends React.Component {
    render() {
        return (
            <div className={'mountains'}>
                {this.props.children}
            </div>
        );
    }
}

Background.propTypes = {
    children: PropTypes.node
};