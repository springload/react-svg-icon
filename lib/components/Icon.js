import React from 'react';

export default React.createClass({

    displayName: 'Icon',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        className: React.PropTypes.string
    },

    render() {

        var useTag = '<use xlink:href="#i-' + this.props.name + '" />';

        var className = ['i'];
        if (this.props.className) {
            className.push(this.props.className)
        }

        return (
            <svg className={className.join(" ")} dangerouslySetInnerHTML={{__html: useTag }} />
        );

    }

});
