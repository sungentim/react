/*
 * @Author: sungen
 * @since: 2024-04-22 12:13:58
 * @desc: 
 * @LastEditTime: 2024-04-23 10:59:20
 * @LastEditors: sungen
 */
import React, { Component } from 'react';

import store from '../Store.js';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    const state = store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }

    return { sum: sum };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  render() {
    const sum = this.state.sum;
    return (
      <div>Total Count: {sum}</div>
    );
  }
}

export default Summary;