import React from 'react'

class BigComponent extends React.Component {
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <h1>Big Component</h1>
        { this.props.match.params.every ? <h2>{this.props.match.params.every}</h2> : <h2>Nothing</h2> }
      </React.Fragment>
    )
  }
}

export default BigComponent
