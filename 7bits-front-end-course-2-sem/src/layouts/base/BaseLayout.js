import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/header/Header';

import './style.css';
import SideBar from "./components/sidebar/SideBar";

export default class BaseLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <main className={`main`}>
                    <SideBar className='main__side-bar'/>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

BaseLayout.propTypes = {
    children: PropTypes.node.isRequired
};