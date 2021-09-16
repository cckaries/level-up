import React, { Component } from 'react'

export class ClassMain extends Component {
  /* old
    constructor(props) {
      super(props);
      this.state = { 
        state1: 'abc',
        state2: 'def'
      };
    }
  */

  // new
  state = {
    state1: 'abc',
    state2: 'def',
  }

  componentDidMount() {
    // do something when a component is mounted
  }

  static getDerivedStateFromProps(props, state) {
    // when a component is about to mount or update
  }

  componentDidUpdate(prevProps, prevState) {
    // when a component is updated
    this.setState({state1: 'xyz', state2: '123'});
  }
  
  componentWillMount() {
    // when a component is about to be unmounted
  }

  render() {
    return (
      <div>
        this is a react class component for demo...
      </div>
    )
  }
}

export default ClassMain
