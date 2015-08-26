import React from 'react';

export default React.createClass({

    displayName: 'Icon',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        cssClass: React.PropTypes.string
    },

    render() {

        var useTag = '<use xlink:href="#i-' + this.props.name + '" />';

        var cssClass = ['i'];
        if (this.props.cssClass) {
            cssClass.push(this.props.cssClass)
        }

        return (
            <svg className={cssClass.join(" ")} dangerouslySetInnerHTML={{__html: useTag }} />
        );

    }

});
