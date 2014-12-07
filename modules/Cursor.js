var React = require('react');

var Cursor = React.createClass({
  render: function () {
    return (
      <rect
        x={this.props.increment * this.props.posX}
        y={this.props.increment * this.props.posY}
        width={this.props.increment}
        height={this.props.increment}
      />
    );
  }
});

module.exports = Cursor;
