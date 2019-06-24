import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import getTodoList from '../../actions/taskList/getTodoList'

import TodoTask from '../../components/task/todo/TodoTask';

import './style.css';
import FormField from "../../components/form/FormField";
import CreateButton from "../../components/buttons/create/CreateButton";

class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      getId: 0
    };
  }

  componentDidMount() {
    this.props.getTodoList();
  }

  onChange = (event) => {
    this.setState( {
      value: event.target.value
    })
  };

  onClickRemove = (id) => {

  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  renderList = () => {
    return this.props.taskList.map((item) => {
      return (
        <TodoTask onRemove={this.onClickRemove} id={item.id} title={item.text} />
      );
    });
  };

  render() {
    return (
      <React.Fragment>
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
        {this.renderList()}
      </React.Fragment>
    );
  };
}

const mapStateToProps = (state) => ({
  taskList: state.todoListReducer.taskList
});

const mapDispatchToProps = (dispatch) => ({
  getTodoList: bindActionCreators(getTodoList, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
