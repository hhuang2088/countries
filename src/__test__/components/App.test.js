import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<App />);
})

it('has a div', () => {
	expect(wrapper.find('div').length).toEqual(1);
});

it('has a BrowserRouter', () => {
	expect(wrapper.find('BrowserRouter').length).toEqual(1);
});

it('has a Header', () => {
	expect(wrapper.find('Switch').length).toEqual(1);
});

it('has two Routes', () => {
	expect(wrapper.find('Route').length).toEqual(2);
});
