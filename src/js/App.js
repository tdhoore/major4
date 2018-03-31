import React from 'react';
import ReactDOM from 'react-dom';
import Lock from './Lock.jsx';
import UnlockCombo from './UnlockCombo.jsx';
import {randomInt09} from './lib/functions.js'

const combo = [];

//gen ranom combination
for (let i = 0; i < 3; i++) {
  combo.push(randomInt09());
}

ReactDOM.render(<div className="video">
  <UnlockCombo combo={combo}/>
  <Lock combo={combo}/>
</div>, document.querySelector(`.videoHolder`));
