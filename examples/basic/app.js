import React from 'react';
import Icon from '../../lib/index';

let App = React.createClass({
    render() {
      return (
          <div className="example">
              <h1>React SVG icon example</h1>
              <Icon name="rocket" className="i--red" />
          </div>
      );
    }
});

React.render(<App/>, document.getElementById('container'));
