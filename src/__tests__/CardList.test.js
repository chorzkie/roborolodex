import { shallow, mount, render } from 'enzyme';
import CardList from '../components/CardList';
import React from 'react';
import toJson from 'enzyme-to-json';


it('expect to render CardList component', () => {
    const mockRobots = [{
        id: 1,
        name: 'Jackie Chan',
        username: 'JaCha',
        email: 'Chan@gmail.com'
    }]
    expect(toJson(shallow(<CardList Robots={mockRobots} />))).toMatchSnapshot();
});
