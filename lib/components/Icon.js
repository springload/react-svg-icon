import React from 'react';

export default React.createClass({

  displayName: 'Icon',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  },

  render() {
    const className = ['i'];
    if (this.props.className) {
      className.push(this.props.className);
    }

    return (
      <svg className={className.join(' ')}>
        <use xlinkHref={'#i-' + this.props.name} />
      </svg>
    );
  }

});
