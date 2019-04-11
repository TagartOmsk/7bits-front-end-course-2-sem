import React from 'react';

import { connect } from 'react-redux';

import TodoTask from '../../components/task/todo/TodoTask';

import list from './list';

import './style.css';
import FormField from "../../components/form/FormField";
import CreateButton from "../../components/buttons/create/CreateButton";

class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      itemList: list.data,
      getId: 0
    };
  }

  onChange = (event) => {
    this.setState( {
      value: event.target.value
    })
  };

  onClickRemove = (id) => {
    this.setState( {
      itemList: this.state.itemList.filter(item => item.id !== id)
    })
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.setState( {
      itemList: [
        {
          "title": this.state.value,
          "id": this.state.getId,
        },
          ...this.state.itemList
      ],
      value: '',
      getId: this.state.getId + 1
    })
  };

  renderList = () => {
    return this.state.itemList.map((item) => {
      return (
        <TodoTask onRemove={this.onClickRemove} id={item.id} title={item.title} />
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

const mapStateToProps = () => ({});

export default connect(mapStateToProps, null)(Todo);
