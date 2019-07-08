import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import getDoneList from '../../actions/task/getDoneList'
import deleteDoneTask from '../../actions/task/deleteDoneTask';
import whoami from '../../actions/user/whoami';

import DoneTask from '../../components/task/done/DoneTask';

import './style.css';
import Background from "../../components/background/Background";

class Done extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    if (!this.props.authorized || (this.props.doneListError != null && this.props.doneListError.message === "403")) {
      this.props.history.replace('/signin');
    }

    this.props.whoami();
    this.props.getDoneList();
  }

  componentDidUpdate() {
    if (!this.props.authorized || (this.props.doneListError != null && this.props.doneListError.message === "403")) {
      this.props.history.replace('/signin');
    }
    if (!this.props.isList) {
      this.props.getDoneList();
    }
  }

  onClickRemove = (id) => {
    this.props.deleteTask(id);
  };

  renderList = () => {
    const taskList = this.props.taskList;

    if (!taskList.length) {
      return <React.Fragment>
        <Background>
          <div className={'done__empty-text'}>{`You have not done anything yet.\nLet's start!`}</div>
          <div className={'done__monkey'}/>
        </Background>
      </React.Fragment>;
    }

    return <section className='main__content'>{
      taskList.map((item) => {
        return (
            <DoneTask key onRemove={this.onClickRemove} id={item.id} title={item.text} />
        );
      })
    }</section>
  };

  render() {
    return (
        <React.Fragment>
          {this.renderList()}
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  taskList: state.doneListReducer.taskList,
  authorized: state.userReducer.authorized,
  doneListError: state.doneListReducer.error,
  userError: state.userReducer.error,
  isList: state.doneListReducer.isList
});

const mapDispatchToProps = (dispatch) => ({
  getDoneList: bindActionCreators(getDoneList, dispatch),
  deleteTask: bindActionCreators(deleteDoneTask, dispatch),
  whoami: bindActionCreators(whoami, dispatch)
});

Done.propTypes = {
  authorized: PropTypes.bool,
  doneListError: PropTypes.objectOf(Error),
  history: PropTypes.object,
  whoami: PropTypes.func,
  getDoneList: PropTypes.func,
  isList: PropTypes.bool,
  deleteTask: PropTypes.func,
  taskList: PropTypes.array
};
export default connect(mapStateToProps, mapDispatchToProps)(Done);
