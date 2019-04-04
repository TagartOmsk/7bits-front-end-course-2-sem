import React from 'react';

import TodoTask from '../../components/task/todo/TodoTask';

import list from './list';

import './style.css';

export default class Todo extends React.Component {
  renderList = () => {
    return list.data.map((item) => {
      return (
        <TodoTask id={item.id} title={item.title} />
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    );
  };
};
