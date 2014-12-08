var React = require('react');
var EtchSketch = require('kimagure-etch-sketch');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Test out the etch a sketch below: (press ? for help)</h2>
        <EtchSketch bindWindow={true}/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
