import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../lib/index';

const App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>Multiple React SVG icon example</h1>
        <Icon name="pacman" className="i--blue" />
        <Icon name="bug" className="i--white middle-icon" />
        <Icon name="happy" className="i--red" />

        <h2>SVG icon in an accessible button</h2>
        <a href="#" className="btn" role="button" tabIndex="0">
          <Icon name="rocket" title="Rocket" />
        </a>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
