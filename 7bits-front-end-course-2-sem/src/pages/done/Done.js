import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import getDoneList from '../../actions/taskList/getDoneList'

import DoneTask from '../../components/task/done/DoneTask';

import './style.css';

class Done extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      getId: 0
    };
  }

  componentDidMount() {
    this.props.getDoneList();
  }

  onClickRemove = (id) => {

  };

  renderList = () => {
    return this.props.taskList.map((item) => {
      return (
        <DoneTask onRemove={this.onClickRemove} id={item.id} title={item.text} />
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

const mapStateToProps = (state) => ({
  taskList: state.doneListReducer.taskList
});

const mapDispatchToProps = (dispatch) => ({
  getDoneList: bindActionCreators(getDoneList, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Done);
