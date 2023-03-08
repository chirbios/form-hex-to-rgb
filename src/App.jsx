import React, { useState } from 'react';
import './App.css';

function hexToRgb(hex) {
  const hexfull = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexany = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  console.log(result);
  return result
    ? 'rgb(' +
        parseInt(result[1], 16) +
        ', ' +
        parseInt(result[2], 16) +
        ', ' +
        parseInt(result[3], 16) +
        ')'
    : 'Ошибка!';
}

class BackgroundColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgcolor: '',
      rgbcolor: '',
      errmsg: '',
    };
  }

  changeColor(e) {
    e.preventDefault();
    if (e.target.value.length >= 7) {
      this.setState({
        bgcolor: e.target.value,
        rgbcolor: hexToRgb(e.target.value),
      });
    } else {
      this.setState({
        bgcolor: '',
        rgbcolor: '',
      });
    }
  }

  render() {
    return (
      <div className="render" style={{ backgroundColor: this.state.bgcolor }}>
        {/* <div class="json">
          <pre>{JSON.stringify(this.state, null, ' ')}</pre>
        </div> */}
        <div className="hex">
          <input
            type="text"
            onChange={(e) => {
              this.changeColor(e);
            }}
          />
        </div>
        <div className="rgb">
          <div className="msg">{this.state.rgbcolor}</div>
        </div>
      </div>
    );
  }
}

export default function App() {
  return <BackgroundColor />;
}
