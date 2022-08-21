import React, { Component } from 'react';

class Exercise1 extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1120w,f_auto,q_auto:best/newscms/2019_11/1417350/banana-hack-today-square-190313.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
      currentImg: 0
    }
  }
  shiftImageBack = () => {
    let currentImg = this.state.currentImg
    currentImg--
    this.setState({
      currentImg
    })
  }
  shiftImageForward = () => {
    let currentImg = this.state.currentImg
    currentImg++
    this.setState({
      currentImg
    })  
  }

  render() {
    return (
      <div >
        <button className="back" onClick={this.shiftImageBack}>back</button>
        <img src={this.state.images[this.state.currentImg]} />
        <button className="forward" onClick={this.shiftImageForward}>forward</button>
      </div>
    );
  }
}

export default Exercise1;