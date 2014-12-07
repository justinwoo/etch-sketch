var React = require('react');
var EtchSketch = require('kimagure-etch-sketch');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <EtchSketch bindWindow={true}/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
