import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Task extends React.Component {
  render() {
    return (
      <article className="task">
        <h3 className="task__title">{this.props.title}</h3>
      </article>
    );
  };
};

Task.propTypes = {
  title: PropTypes.string
};

Task.defaultProps = {
  title: ''
};
