import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../lib/index';

const App = () => (
    <div>
        <Icon name="i-rocket" />
        <Icon name="i-rocket" className="i--red" />
        <Icon name="i-rocket" title="Start the trip" />
    </div>
);

ReactDOM.render(<App />, document.querySelector('[data-mount-basic]'));
