var React = require('react');
var Cursor = require('./Cursor');

var keyCodes = {
  h: 104,
  j: 106,
  k: 107,
  l: 108,
  w: 119,
  a: 97,
  s: 115,
  d: 100,
  left: 37,
  right: 39,
  up: 38,
  down: 40
};

var EtchSketch = React.createClass({
  getDefaultProps: function () {
    return {
      className: 'kimagure-etch-sketch',
      width: 800,
      height: 600,
      increment: 10
    }
  },

  getInitialState: function () {
    return {
      posX: 0,
      posY: 0
    }
  },

  render: function () {
    return (
      <div
        className={this.props.className}
        tabIndex="1">
        <svg
          width={this.props.width}
          height={this.props.height}>
          <Cursor
            posX={this.state.posX}
            posY={this.state.posY}
            increment={this.props.increment}
          />
        </svg>
      </div>
    );
  },

  componentDidMount: function () {
    var container = document.getElementsByClassName(this.props.className)[0];
    container.onkeypress = this.handleKeyPress;
  },

  handleKeyPress: function (e) {
    switch (e.which) {
      case keyCodes.h:
      case keyCodes.a:
        this.shiftLeft();
        break;
      case keyCodes.j:
      case keyCodes.s:
        this.shiftDown();
        break;
      case keyCodes.l:
      case keyCodes.d:
        this.shiftRight();
        break;
      case keyCodes.k:
      case keyCodes.w:
        this.shiftUp();
        break;
    }
  },

  shiftLeft: function () {
    var x = this.state.posX;
    if (x > 0) this.setState({
      posX: x - 1
    });
  },

  shiftRight: function () {
    var x = this.state.posX;
    if (x < this.props.width) this.setState({
      posX: x + 1
    });
  },

  shiftUp: function () {
    var y = this.state.posY;
    if (y > 0) this.setState({
      posY: y - 1
    });
  },

  shiftDown: function () {
    var y = this.state.posY;
    if (y < this.props.height) this.setState({
      posY: y + 1
    });
  }
});

module.exports = EtchSketch;
