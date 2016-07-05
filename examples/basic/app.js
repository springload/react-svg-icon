import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../lib/index';

const App = () => (
  <div className="example">
    <Icon name="rocket" title="Rocket" />
  </div>
);

ReactDOM.render(<App />, document.querySelector('[data-basic-example]'));
