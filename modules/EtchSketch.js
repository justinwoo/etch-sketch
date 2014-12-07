var React = require('react');

var EtchSketch = React.createClass({
  render: function () {
    return (
      <div className={this.props.className || "kimagure-etch-sketch"}>
        <svg
          width={this.props.width || 800}
          height={this.props.height || 600}>
            <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5"/>
            <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5"/>
        </svg>
      </div>
    );
  }
});

module.exports = EtchSketch;
