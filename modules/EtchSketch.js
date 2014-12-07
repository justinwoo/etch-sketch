var React = require('react');
var Cursor = require('./Cursor');
var Rect = require('./Rect');
var HelpMessage = require('./HelpMessage');

var keyCodes = {
  h: 104,
  j: 106,
  k: 107,
  l: 108,
  w: 119,
  a: 97,
  s: 115,
  d: 100,
  question: 63,
  q: 113
};

function createRect(increment) {
  return function (print) {
    var split = print.split(',');
    var x = split[0];
    var y = split[1];
    return (
      <Rect
        key={print}
        x={increment * x}
        y={increment * y}
        width={increment}
        height={increment}
      />
    );
  }
}

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
      posY: 0,
      trail: [],
      showHelp: false
    }
  },

  render: function () {
    var trail = this.state.trail.map(createRect(this.props.increment));
    var helpMessage;
    if (this.state.showHelp) {
      helpMessage = (
        <HelpMessage/>
      );
    }
    return (
      <div
        className={this.props.className}
        style={{width: this.props.width, height: this.props.height}}
        tabIndex="1">
        <svg
          style={{position: "absolute"}}
          width={this.props.width}
          height={this.props.height}>
          {trail}
          <Cursor
            x={this.props.increment * this.state.posX}
            y={this.props.increment * this.state.posY}
            width={this.props.increment}
            height={this.props.increment}
          />
        </svg>
        {helpMessage}
      </div>
    );
  },

  componentDidMount: function () {
    if (this.props.bindWindow) {
      window.onkeypress = this.handleKeyPress;
    } else {
      var container = document.getElementsByClassName(this.props.className)[0];
      container.onkeypress = this.handleKeyPress;
    }
  },

  handleKeyPress: function (e) {
    if (e.which === keyCodes.question && e.shiftKey) {
      this.showHelp();
    }
    if (e.which === keyCodes.q && this.state.showHelp) {
      this.hideHelp();
    }
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

  moveCursor: function (newState) {
    var print = this.state.posX + ',' + this.state.posY;
    if (this.state.trail.indexOf(print) === -1) {
      newState.trail = this.state.trail.concat(print);
    }
    this.setState(newState);
  },

  shiftLeft: function () {
    var x = this.state.posX;
    if (x > 0) this.moveCursor({
      posX: x - 1
    });
  },

  shiftRight: function () {
    var x = this.state.posX;
    if ((x + 1) * this.props.increment < this.props.width) this.moveCursor({
      posX: x + 1
    });
  },

  shiftUp: function () {
    var y = this.state.posY;
    if (y > 0) this.moveCursor({
      posY: y - 1
    });
  },

  shiftDown: function () {
    var y = this.state.posY;
    if ((y + 1) * this.props.increment < this.props.height) this.moveCursor({
      posY: y + 1
    });
  },

  showHelp: function () {
    this.setState({
      showHelp: true
    });
  },

  hideHelp: function () {
    this.setState({
      showHelp: false
    });
  }
});

module.exports = EtchSketch;
