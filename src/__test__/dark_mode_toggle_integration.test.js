import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';

let wrapper;

beforeEach(() => {
	wrapper = mount(
		<Root>
			<App />
		</Root>
	);
});

afterEach(() => {
	wrapper.unmount();
});

describe('the #dark-mode-toggle element', () => {
	let darkModeButton;

	beforeEach(() => {
		darkModeButton = wrapper.find('#dark-mode-toggle');
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
});
