import { shallow } from 'enzyme';
import App from '../containers/App.js';
import React from 'react';
import toJson from 'enzyme-to-json';
import { mockStore } from '../setupTests';
import configureStore from 'redux-mock-store';



const initialState = {
    searchField: '',
    isPending: 'false',
    Robots: [{
        id: 1,
        name: 'Jackie Chan',
        username: 'JaCha',
        email: 'Chan@gmail.com'
    }],
    error: '',
}

const store = configureStore(initialState)

it('should render App component correctly', () => {
    const wrapper = shallow(<App store={ store } />).dive();
    expect(toJson(wrapper)).toMatchSnapshot();
});
