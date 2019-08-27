import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

const LIST = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [{ title: "ㄒㄑㄜ", isComplete: false },
      { title: "ㄎ", isComplete: false }],
      LIST,
    }
  }

  onItemClick(item) {
    return () => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [...todoItems.slice(0, index),
        {
          ...item, isComplete: !isComplete
        },
        ...todoItems.slice(index + 1)
        ]
      })
    };
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      if (!text.trim()) {
        return;
      }
      this.setState({
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      })
      event.target.value = "";
    }
  }

  onDismiss(id, item) {
    console.log(id);
    console.log(item.objectID);
    const updataList = this.state.LIST.filter(item => item.objectID !== id);
    console.log(updataList);
    this.setState({ LIST: updataList })
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        <div>
          <div className="Header">
            <input type="text" placeholder="Add a new item" onKeyUp={(event) => this.onKeyUp(event)} />
          </div>
          <div className="TodoList">
            {todoItems.map((item, i) => (
              <TodoItem key={i} item={item} onClick={this.onItemClick(item)} />
            ))}
          </div>
        </div>

        <div className="ASD">
          {this.state.LIST.map(item =>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID, item)}
                  type="button"
                >
                  Dismiss
</button>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
