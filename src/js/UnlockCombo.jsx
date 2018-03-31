import React, {Component} from 'react';

class UnlockCombo extends Component {
  render() {
    return <p className="correctCombo">
      {this.props.combo}
    </p>
    //return this.props.combo.map((item, index) => <p className="" key={`key${index}`}>{item}</p>)
  }
}

export default UnlockCombo;
