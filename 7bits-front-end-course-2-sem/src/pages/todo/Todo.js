import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import TodoTask from '../../components/task/todo/TodoTask';

import './style.css';
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

  renderList = () => {
    const taskList = this.props.taskList;

    if (taskList.length === 0) {
      return <React.Fragment>
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
        </section>
        <Background>
          <div className={'todo__empty-text'}>{`You do not have any tasks in «To Do».\nBut you can create them right here!`}</div>
          <div className={'todo__monkey'}/>
        </Background>
      </React.Fragment>;
    }

    return <section className='main__content'>
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
      </form>{
      taskList.map((item) => {
        if (item.id === this.props.editId) {
          if (this.props.isEditing) {
            return (
                <TodoTask textFragment={
                  <input type={'text'} value={this.state.editValue} className="task__title" onChange={this.onTaskChange}/>
                } text={this.state.editValue} onCheck={this.onCheck} onRemove={this.onClickRemove} id={item.id} onEdit={this.onTaskSubmit} editType={'submit'}/>
            );
          } else {
            if (this.props.editText !== '') {
              return (
                  <TodoTask textFragment={
                    <h3 className="task__title">{this.props.editText}</h3>
                  } text={this.props.editText} onCheck={this.onCheck} onRemove={this.onClickRemove} id={item.id} onEdit={this.onTaskEdit} editType={'edit'}/>
              );
            } else {
              return (
                  <TodoTask textFragment={
                    <h3 className="task__title">{this.state.editValue}</h3>
                  } text={this.state.editValue} onCheck={this.onCheck} onRemove={this.onClickRemove} id={item.id} onEdit={this.onTaskEdit} editType={'edit'}/>
              );
            }
          }
        } else {
          return (
              <TodoTask textFragment={
                <h3 className="task__title">{item.text}</h3>
              } text={item.text} onCheck={this.onCheck} onRemove={this.onClickRemove} id={item.id} onEdit={this.onTaskEdit} editType={'edit'}/>
          );
        }
      })
    }</section>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
