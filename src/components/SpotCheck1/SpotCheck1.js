import React, { Component } from 'react';

class SpotCheck1 extends Component {
    //add another method called logHover, 
    logHover(){
        console.log("I WAS HOVERD!")
    }
    //which prints "I was hovered!" when the *mouse enters* the button
    logClick() {
        console.log("I was clicked!")
    }
    render() {
        return (
            <button id="logger" onClick={this.logClick} onMouseEnter={this.logHover}>Click me</button>
        );
    }
}

export default SpotCheck1;
