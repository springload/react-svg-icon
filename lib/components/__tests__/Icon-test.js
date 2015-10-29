import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Icon from '../../index';

/* eslint func-names:0 */
describe('Icon', function() {
  let item;
  let svg;

  beforeEach(() => {
    item = TestUtils.renderIntoDocument(
      <Icon name="rocket" className="i--red" />
    );
    svg = ReactDOM.findDOMNode(item);
  });

  it('should have class name', function() {
    expect(svg.className.baseVal).to.equal('i i--red');
  });

  it('should have use tag', function() {
    expect(svg.childNodes).to.have.length(1);
    expect(svg.children[0].tagName.toLowerCase()).to.equal('use');
  });

  it('should have class for use tag', function() {
    expect(svg.children[0].attributes['xlink:href'].value).to.equal('#i-rocket');
  });
});

describe('Icon no class', function() {
  let item;
  let svg;

  beforeEach(() => {
    item = TestUtils.renderIntoDocument(
      <Icon name="rocket" />
    );
    svg = ReactDOM.findDOMNode(item);
  });

  it('should have just "i" class', function() {
    expect(svg.className.baseVal).to.equal('i');
  });

  it('should have use tag', function() {
    expect(svg.childNodes).to.have.length(1);
    expect(svg.children[0].tagName.toLowerCase()).to.equal('use');
  });

  it('should have class for use tag', function() {
    expect(svg.children[0].attributes['xlink:href'].value).to.equal('#i-rocket');
  });
});
