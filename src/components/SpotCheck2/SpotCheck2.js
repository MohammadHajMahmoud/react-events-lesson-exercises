import React, { Component } from 'react';

export const Home = function () {
return <div className='home'>Welcome to our page</div>
}

export const About = function () {
  return <div className='about'>its all about cats</div>
}

export class SpotCheck2 extends Component {

  // Your SpotCheck2 should render the Home Component, the About Component, and a Toggle Button
  // Either the Home or About component should be rendered when you press the toggle button
  // You should have a state with the property "showHome", with a value of true or false
  // You must use state and setState, to change the value of showHome
  constructor() {
    super()
    this.state = {
      showHome: true
    }
  }
  toggle =()=>{
    this.setState({
      showHome : !this.state.showHome
    })
  }
  render() {
  
    return (
      <div >
{this.state.showHome ? <Home/> : <About/>}
<button onClick={this.toggle}> Toggle</button>
      </div>
    );
  }
}


