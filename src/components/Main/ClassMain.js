import React, { Component } from 'react'

export class ClassMain extends Component {
  componentDidMount() {
    // do something when a component is mounted
  }

  static getDerivedStateFromProps(props, state) {
    // when a component is about to update
  }

  componentDidUpdate(prevProps, prevState) {
    // when a component is updated
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
