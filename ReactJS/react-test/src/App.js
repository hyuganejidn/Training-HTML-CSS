import React from 'react';
import logo from './logo.svg';
import './App.css';
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
function FormattedDate(props) {
  return <h3>It is {props.date.toLocaleTimeString()}</h3>
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  componentDidMount() {
    this.timeID = setInterval(
      () => this.tick(), 1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}

const isSearched = searchTerm => item => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LIST,
      searchTerm: ''
    }
  }
  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }
  onDismiss(id, item) {
    console.log(id);
    console.log(item.objectID);
    const updataList = this.state.LIST.filter(item => item.objectID !== id);
    console.log(updataList);
    this.setState({ LIST: updataList })
  }

  render() {
    const { searchTerm, LIST } = this.state
    return (
      <div className="App" >
        <Toggle />
        <Clock />
        <Clock />
        <Clock />
        <form>
          <input type="text"
            value={searchTerm}
            onChange={(event) => this.onSearchChange(event)} />
        </form>
        {LIST.filter(isSearched(searchTerm)).map(item =>
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
    );
  }

}

export default App;