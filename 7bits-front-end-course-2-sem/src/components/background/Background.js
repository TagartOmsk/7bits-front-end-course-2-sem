import React from "react";
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