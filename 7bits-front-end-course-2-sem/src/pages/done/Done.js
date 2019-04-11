import React from 'react';

import { connect } from 'react-redux';

import DoneTask from '../../components/task/done/DoneTask';

import list from './list';

import './style.css';

class Done extends React.Component {

  onClickRemove = (id) => {
    this.setState( {
      itemList: this.state.itemList.filter(item => item.id !== id)
    })
  };

  renderList = () => {
    return list.data.map((item) => {
      return (
        <DoneTask onRemove={this.onClickRemove} id={item.id} title={item.title} />
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

export default connect(mapStateToProps, null)(Done);
