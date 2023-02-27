import React, { Component } from 'react'

export default class Classcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'name',
         age: 'age'
      }

      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick () {
        this.setState({
            name: 'имя',
            age: 'возраст'
        })
    }
  render() {
    return (
      <div>
        <p>{this.state.name}: 'geeks'</p>
        <p>{this.state.age}: 15</p>
        <button onClick={this.handleClick}>Нажми на меня</button>
      </div>
    )
  }
}
