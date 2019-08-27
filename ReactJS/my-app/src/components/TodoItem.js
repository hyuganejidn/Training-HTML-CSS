import React, { Component } from "react";
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;

    return (
      <div onClick={() => onClick()} className={classNames()} >
        <p className={classNames('TodoItem',
          { TodoItem_complete: item.isComplete })} > {item.title}</p>
      </div >
    );
  }
}
export default TodoItem;
