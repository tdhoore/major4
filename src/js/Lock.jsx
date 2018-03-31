import React, {Component} from 'react';
import LockDile from './LockDile.jsx';

class Lock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solutionCombo: this.props.combo,
      currentCombo: [0, 0, 0]
    }
  }

  onChangeChannel(channel, value) {
    this.setState({[channel]: value});
  }

  handleClickButton = (e) => {
    e.preventDefault();
    const $btn = e.currentTarget;
    const id = $btn.dataset.id;
    let currentCombo = this.state.currentCombo;
    let newValue = currentCombo[id];

    if ($btn.dataset.sum === `up`) {
      if (newValue < 9) {
        newValue++;
      } else {
        newValue = 0;
      }
    } else {
      if (newValue !== 0) {
        newValue--;
      } else {
        newValue = 9;
      }
    }

    //set new value
    currentCombo[id] = newValue;

    this.onChangeChannel(`currentCombo`, currentCombo);
  }

  render() {
    return this.state.currentCombo.map((number, index) => {
      return (<LockDile currentNumber={number} handleClickButton={this.handleClickButton} key={`LockDile${index}`} solution={this.state.solutionCombo[index]} id={index}/>);
    });
  }

}

export default Lock;
