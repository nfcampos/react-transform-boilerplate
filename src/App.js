import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

Counter.__id = 'Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.blah = this.blah.bind(this)
  }

  blah() {
    console.log('yay')
  }

  render() {
    this.blah()
    return (
      <div>
        <BogusText text='yay' />
        <Counter increment={10} color={SUPER_NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}

App.__id = 'App'

const BogusText = ({text}) => <div>{text}hhhh</div>

export {App}
