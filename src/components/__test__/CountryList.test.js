import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import CountryList from '../CountryList/CountryList';

let wrapper;

beforeEach(() => {
	wrapper = mount(
		<Root>
			<CountryList />
		</Root>
	);
});

afterEach(() => {
	wrapper.unmount();
});

it('has seven divs', () => {
	expect(wrapper.find('div').length).toEqual(7);
});

it('has a Searchbar component', () => {
	expect(wrapper.find('Searchbar').length).toEqual(1);
});
