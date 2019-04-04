import React from 'react';

import DoneTask from '../../components/task/done/DoneTask';

import list from './list';

import './style.css';

export default class Done extends React.Component {
  renderList = () => {
    return list.data.map((item, index) => {
      return (
        <DoneTask id={index} title={item.title} />
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
