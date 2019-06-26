import React from 'react';
import Root from '../../Root';
import Searchbar from '../../components/Searchbar/Searchbar';
import { mount } from 'enzyme';

let wrapper;

beforeEach(() => {
	wrapper = mount(
		<Root>
			<Searchbar />
		</Root>
	);
});

afterEach(() => {
	wrapper.unmount();
});

it('has five divs', () => {
	expect(wrapper.find('div').length).toEqual(5);
});
