import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class PlainLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main className='main'>
                    <section className='main__content'>
                        {this.props.children}
                    </section>
                </main>
            </React.Fragment>
        );
    };
};

PlainLayout.propTypes = {
    children: PropTypes.node.isRequired
};