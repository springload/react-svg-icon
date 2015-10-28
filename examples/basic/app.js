import React from 'react';
import Icon from '../../lib/index';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<App/>, document.getElementById('container'));
