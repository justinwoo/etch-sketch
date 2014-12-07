var React = require('react');
var EtchSketch = require('kimagure-etch-sketch');

var App = React.createClass({
  render: function () {
    return (
      <EtchSketch/>
    );
  }
});

React.render(<App/>, document.body);
