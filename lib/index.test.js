import React from 'react';
import { shallow } from 'enzyme';
import Icon from './index';

describe('Icon', () => {
    it('renders', () => {
        expect(shallow(<Icon name="rocket" />)).toMatchSnapshot();
    });

    it('#className', () => {
        expect(shallow(<Icon name="rocket" className="i--red" />)).toMatchSnapshot();
    });

    it('#title', () => {
        expect(shallow(<Icon name="rocket" title="Test title" />)).toMatchSnapshot();
    });
});
