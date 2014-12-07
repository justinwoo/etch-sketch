var React = require('react');

var HelpMessage = React.createClass({
  render: function () {
    var containerStyle = {
      background: "rgba(0,0,0,0.5)",
      width: "100%",
      height: "100%",
      position: "relative"
    };
    var contentStyle = {
      background: "white",
      width: 300,
      height: 320,
      position: 'absolute',
      top: "50%",
      left: "50%",
      margin: "-175px 0 0 -150px",
      borderRadius: 10
    };
    var headerStyle = {
      fontFamily: 'Helvetica',
      fontSize: 20,
      marginLeft: 20
    }
    var listStyle = {
      listStyle: "none",
      fontFamily: 'Helvetica',
      fontSize: 16,
      lineHeight: 2.5
    };
    var keyComboStyle = {
      borderRadius: 5,
      padding: 6,
      marginRight: 7,
      background: "#eee"
    }
    return (
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={headerStyle}>Keyboard shortcuts</h1>
          <ul style={listStyle}>
            <li>
              <span style={keyComboStyle}>w</span>
              <span style={keyComboStyle}>k</span>
               Move cursor up
            </li>
            <li>
              <span style={keyComboStyle}>a</span>
              <span style={keyComboStyle}>h</span>
               Move cursor left
            </li>
            <li>
              <span style={keyComboStyle}>s</span>
              <span style={keyComboStyle}>j</span>
               Move cursor down
            </li>
            <li>
              <span style={keyComboStyle}>d</span>
              <span style={keyComboStyle}>l</span>
               Move cursor right
            </li>
            <li>
              <span style={keyComboStyle}>?</span>
               show this message
            </li>
            <li>
              <span style={keyComboStyle}>q</span>
               close this message
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = HelpMessage;
