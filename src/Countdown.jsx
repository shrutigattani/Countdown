import React, { Component } from 'react';

class Countdown extends Component{
  constructor(props){
    super(props);
    this.state = {
      active:0,
      timer: 0,
      input:0,
      min:'00',
      sec:'00'
    }
    this.secondsRemaining = 0;
    this.handleClick = this.handleClick.bind(this);
    this.clock = this.clock.bind(this);
    this.update = this.update.bind(this);
  }


clock(){
  var min = Math.floor(this.secondsRemaining / 60);
var sec = this.secondsRemaining - (min * 60);
  this.setState({min:min, sec:sec});
  if(this.state.sec === 0 && this.state.min === 0){
    this.setState({active: 0});
      clearInterval(this.timer);
  }
  this.secondsRemaining--;

}

  handleClick(){
    var timer = 0;
    let time = this.state.min;
this.secondsRemaining = time * 60;
    if(this.state.active){
      console.log("Inside if")
      this.setState({active: 0});
      clearInterval(this.timer);
    }
    else{
      this.setState({active: 1});
      this.timer = setInterval( () =>
        this.clock(),
        1000);
    }
  }

  update(e){
    let input = (e.target.value)*1;
    this.setState({min: input});
  }

render(){
  return(
    <div>
    <h3>Input time</h3>
      <input type="number" onChange={this.update} required />
    <button onClick={this.handleClick}>{this.state.active ? 'Stop' : 'Start'}</button>
    <ul>{this.state.min}:{this.state.sec}</ul>
    </div>
  )
}

}

 export default Countdown;
