import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import TodoTask from '../../components/task/todo/TodoTask';

import FormField from "../../components/form/FormField";
import CreateButton from "../../components/buttons/create/CreateButton";
import getTodoList from '../../actions/task/getTodoList';

import addTodoTask from "../../actions/task/addTodoTask";
import deleteTask from "../../actions/task/deleteTask";
import whoami from '../../actions/user/whoami';
import markTaskDone from "../../actions/task/markTaskDone";
import editTask from '../../actions/task/editTask';
import submitTask from '../../actions/task/submitTask';
import clearCache from '../../actions/task/clearCache';
import submitTaskWithoutPatch from "../../actions/task/submitTaskWithoutPatch";
import Background from "../../components/background/Background";
import './style.css';

class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      editValue: ''
    };

  }

  componentDidMount() {
    if (!this.props.authorized) {
      this.props.history.replace('/signin');
    }

    this.props.whoami();
    this.props.getTodoList();
  }

  componentDidUpdate() {
    if (!this.props.authorized) {
      this.props.history.replace('/signin');
    }
    if (this.props.toDoListError != null && this.props.toDoListError.message === "403") {
      this.props.clearCache();
      this.props.history.replace('/signin');
    }
    if (!this.props.isList || (this.props.toDoListError != null && this.props.toDoListError.message === "400")) {
      this.props.getTodoList();
    }
  }

  onTaskEdit = (id, text) => {
    this.props.editTask(id, text);
    this.setState({
      editValue: text
    });
  };

  onTaskSubmit = (id) => {
    if (this.props.editText === this.state.editValue) {
      this.props.submitTaskNoPatch();
    } else {
      this.props.submitTask(id, this.state.editValue);
    }
  };

  onTaskChange = (event) => {
    event.preventDefault();
    this.setState( {
      editValue: event.target.value
    })
  };

  onChange = (event) => {
    this.setState( {
      value: event.target.value
    })
  };

  onClickRemove = (id) => {
    this.props.deleteTask(id);
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.props.addTask(this.state.value);

    this.setState( {
      value: ''
    });
  };

  onCheck = (id) => {
    this.props.markDone(id);
  };

  renderBackground = () => {
    return <Background>
      <div className={'todo__empty-text'}>{`You do not have any tasks in «To Do».\nBut you can create them right here!`}</div>
      <div className={'todo__monkey'}/>
    </Background>
  };

  renderList = () => {
    const taskList = this.props.taskList;

    return <div className={'task-list'}>
      {
        taskList.map((item) => {

          let value = item.text;

          if (item.id === this.props.editId) {

            value = (this.props.editText !== '' && !this.props.isEditing) ? this.props.editText : this.state.editValue;

            if (this.props.isEditing) {
              return (
                  <TodoTask textFragment={
                    <input type={'text'} value={value} className="task__title" onChange={this.onTaskChange}/>
                  } text={value} onCheck={this.onCheck} onRemove={this.onClickRemove} id={item.id} onEdit={this.onTaskSubmit} editType={'submit'}/>
              );
            }
          }
          return (
              <TodoTask key textFragment={
                <h3 className="task__title">{value}</h3>
              } text={value} onCheck={this.onCheck} onRemove={this.onClickRemove} id={item.id} onEdit={this.onTaskEdit} editType={'edit'}/>
          );
        })
      }
    </div>;
  };

  render() {
    const renderFragment = this.props.taskList.length ? this.renderList : this.renderBackground;

    return (
      <React.Fragment>
        <section className='main__content'>
          <form
              className={'form'}
              onSubmit={this.onSubmit}
          >
            <FormField
                value={this.state.value}
                placeholder={'Type your new task'}
                onChange={this.onChange}
            />
            <CreateButton
                type={'submit'}
                value={'Create'}
                disabled={!this.state.value}
            />
          </form>
          {renderFragment === this.renderList ? renderFragment() : ''}
        </section>
        {renderFragment === this.renderBackground ? renderFragment() : ''}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  taskList: state.todoListReducer.list,
  toDoListError: state.todoListReducer.error,
  userError: state.userReducer.error,
  location: state.todoListReducer.location,
  authorized: state.userReducer.authorized,
  isList: state.todoListReducer.isList,
  editId: state.todoListReducer.id,
  isEditing: state.todoListReducer.isEditing,
  editText: state.todoListReducer.editText
});

const mapDispatchToProps = (dispatch) => ({
  getTodoList: bindActionCreators(getTodoList, dispatch),
  addTask: bindActionCreators(addTodoTask, dispatch),
  deleteTask: bindActionCreators(deleteTask, dispatch),
  whoami: bindActionCreators(whoami, dispatch),
  markDone: bindActionCreators(markTaskDone, dispatch),
  editTask: bindActionCreators(editTask, dispatch),
  submitTask: bindActionCreators(submitTask, dispatch),
  clearCache: bindActionCreators(clearCache, dispatch),
  submitTaskNoPatch: bindActionCreators(submitTaskWithoutPatch, dispatch)
});

Todo.propTypes = {
  authorized: PropTypes.bool,
  toDoListError: PropTypes.objectOf(Error),
  history: PropTypes.object,
  whoami: PropTypes.func,
  getTodoList: PropTypes.func,
  isList: PropTypes.bool,
  deleteTask: PropTypes.func,
  taskList: PropTypes.array,
  clearCache: PropTypes.func,
  editTask: PropTypes.func,
  editText: PropTypes.string,
  submitTask: PropTypes.func,
  submitTaskNoPatch: PropTypes.func,
  addTask: PropTypes.func,
  markDone: PropTypes.func,
  editId: PropTypes.string,
  isEditing: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
