import React, { Component } from 'react'

let imgUrl = './images/react.png'

const divStyle = {
    height: '630px',
    width: '100%',
    backgroundImage: 'url(' + imgUrl + ')',
}

const titleStyle = {
    color: 'white',
    fontSize: '60px',
    paddingTop: '250px',
    align: 'left',
    marginRight: '900px',
}

const messageContent = {
    color: 'white',
    fontSize: '20px',
    marginRight: '870px',
}

class Slide extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1 style={titleStyle}>Say Hello to <br />ReactJS</h1>
        <p style={messageContent}>You will learn how to eat <br /> potatoes properly</p>
      </div>
    )
  }
}

export default Slide;