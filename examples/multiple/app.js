import React from 'react';
import Icon from '../../lib/index';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>Multiple React SVG icon example</h1>
        <Icon name="pacman" className="i--blue" />
        <Icon name="connection" className="i--white" />
        <Icon name="database" className="i--red" />
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
