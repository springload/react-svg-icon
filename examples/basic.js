import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../lib/index';

const App = () => (
    <div>
        <Icon name="rocket" />
        <Icon name="rocket" className="i--red" />
        <Icon name="rocket" title="Start the trip" />
    </div>
);

ReactDOM.render(<App />, document.querySelector('[data-mount-basic]'));
