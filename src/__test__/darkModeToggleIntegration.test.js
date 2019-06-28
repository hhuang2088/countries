import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';

let wrapper;
let darkModeButton;

beforeEach(() => {
	wrapper = mount(
		<Root>
			<App />
		</Root>
	);
	darkModeButton = wrapper.find('#dark-mode-toggle');
});

afterEach(() => {
	wrapper.unmount();
});

it('elements in the app start off without the inverted class', () => {
	expect(wrapper.find('.inverted').length).toEqual(0);
});

it('clicking the #dark-mode-toggle element after it has already been clicked removes the inverted class', () => {
	darkModeButton.simulate('click');
	darkModeButton.simulate('click');
	expect(wrapper.find('.inverted').length).toEqual(0);
});

it('clicking the #dark-mode-toggle element adds the inverted class to elements in the app', () => {
	darkModeButton.simulate('click');
	expect(wrapper.find('.inverted').length).toBeGreaterThanOrEqual(1);
});
