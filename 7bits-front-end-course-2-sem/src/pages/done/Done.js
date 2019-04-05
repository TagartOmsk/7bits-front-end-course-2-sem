import React from 'react';

import { connect } from 'react-redux';

import DoneTask from '../../components/task/done/DoneTask';

import list from './list';

import './style.css';

class Done extends React.Component {
  renderList = () => {
    return list.data.map((item) => {
      return (
        <DoneTask id={item.id} title={item.title} />
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
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps(), null)(Done);
