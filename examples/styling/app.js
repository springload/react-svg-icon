import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../lib/index';

const App = () => (
  <div className="example">
    <Icon name="pacman" className="i--blue" title="Pacman" />
    <Icon name="bug" className="i--white middle-icon" title="Bug" />
    <Icon name="happy" className="i--red" title="Smile" />
  </div>
);

ReactDOM.render(<App />, document.querySelector('[data-styling-example]'));
