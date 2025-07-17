import React from 'react'

export class ClassCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.increm = this.increm.bind(this)
    this.decrem = this.decrem.bind(this)
  }

  increm() {
    this.setState({ count: this.state.count + 1 })
  }

  decrem() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increm}>Increm</button>
        <button onClick={this.decrem}>Decrem</button>
      </div>
    )
  }
}
