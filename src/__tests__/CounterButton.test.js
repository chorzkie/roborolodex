import { shallow } from 'enzyme';
import CounterButton from '../components/CounterButton';
import React from 'react';
import toJson from 'enzyme-to-json';


it('expect to render Counter Button component', () => {
    const mockColor = 'red';
    expect(toJson(shallow(<CounterButton color={mockColor} />))).toMatchSnapshot();
});

it('correctly increment the counter', () => {
    const mockColor = 'red';
    //const wrapper = toJson(shallow(<CounterButton color={mockColor} />))
    const wrapper = shallow(<CounterButton color={mockColor} />)
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({count: 1})
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({count: 2})
    expect(wrapper.props().color).toEqual('red')
})