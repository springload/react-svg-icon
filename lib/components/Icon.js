import React from 'react';

const Icon = ({ name, title, className }) => (
  <svg className={`i ${className || ''}`} aria-labelledby={title ? `svgtitle_${name}` : null}>
    {title ? (
      <title id={`svgtitle_${name}`}>{title}</title>
    ) : null}
    <use xlinkHref={`#i-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  className: React.PropTypes.string,
};

export default Icon;
