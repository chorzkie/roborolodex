import { shallow, mount, render } from 'enzyme';
import Card from '../components/Card';
import React from 'react';
import toJson from 'enzyme-to-json';


it('expect to render Card component', () => {
    expect(toJson(shallow(<Card />))).toMatchSnapshot();
});
