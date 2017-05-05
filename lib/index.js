import React from 'react';
import PropTypes from 'prop-types';

/**
 * react-svg-icon Accessible SVG icon component.
 */
const Icon = ({ name, title, className }) => (
    <svg
        className={`i ${className || ''}`}
        aria-hidden={title ? null : true}
    >
        {title ? (
            <title>{title}</title>
        ) : null}
        <use
            xlinkHref={`#i-${name}`}
            aria-hidden={title ? true : null}
        />
    </svg>
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
};

Icon.defaultProps = {
    title: null,
    className: null,
};

export default Icon;
