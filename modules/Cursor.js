var React = require('react');

var Cursor = React.createClass({
  render: function () {
    return (
      <rect
        {...this.props}
        fill="#777"
      />
    );
  }
});

module.exports = Cursor;
