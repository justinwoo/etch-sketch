var React = require('react');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');

var Rect = React.createClass({
  mixins: [PureRenderMixin],

  render: function () {
    return (
      <rect
        {...this.props}
      />
    );
  }
});

module.exports = Rect;
