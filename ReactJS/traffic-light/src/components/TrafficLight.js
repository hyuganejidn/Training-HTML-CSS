import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const BLUE = 1;
const YELLOW = 2;

class TrafficLight extends Component {
  render() {
    const { currentColor } = this.props;
    return (
      <div className="TrafficLight" >
        <div className={classNames('buld', 'red', {
          active: currentColor === RED
        })} />
        <div className={classNames('buld', 'yellow', {
          active: currentColor === YELLOW
        })} />
        <div className={classNames('buld', 'blue', {
          active: currentColor === BLUE
        })} />
      </div >
    );
  }
}

export default TrafficLight;