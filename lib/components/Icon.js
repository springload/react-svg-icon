import React from 'react';

export default React.createClass({

  displayName: 'Icon',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    className: React.PropTypes.string
  },

  render() {

    const { name, title, className } = this.props;

    let classNames = ['i'];
    if (className) {
      classNames.push(className);
    }

    return (
      <svg className={classNames.join(' ')} aria-labelledby={title ? 'svgtitle_' + name : null}>
        {title ? (<title id={'svgtitle_' + name}>{title}</title>) : null}
        <use xlinkHref={'#i-' + name} />
      </svg>
    );
  }

});
