import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import Footer from './components/footer/Footer';

export default class PlainLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main className='main plain'>
                    <section className='main__content plain-content'>
                        <div className={'plain__logo'}/>
                        {this.props.children}
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

PlainLayout.propTypes = {
    children: PropTypes.node.isRequired
};