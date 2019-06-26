import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import Header from '../Header/Header.js';

let wrapper;

beforeEach(() => {
	wrapper = mount(
		<Root>
			<Header />
		</Root>
	);
});

afterEach(() => {
	wrapper.unmount();
});

it('has four div', () => {
	expect(wrapper.find('div').length).toEqual(4);
});

it('has a div with class segment', () => {
	expect(wrapper.find('.segment').length).toEqual(1);
});

it('has an h3 element', () => {
	expect(wrapper.find('h3').length).toEqual(1);
});

it('the h3 element has ui left floated header class', () => {
	const h3 = wrapper.find('h3');

	expect(h3.hasClass('ui')).toBeTruthy();
	expect(h3.hasClass('left')).toBeTruthy();
	expect(h3.hasClass('floated')).toBeTruthy();
	expect(h3.hasClass('header')).toBeTruthy();
});

it('has an h5 element', () => {
	expect(wrapper.find('h5').length).toEqual(1);
});

it('the h5 element has ui right floated header class', () => {
	const h5 = wrapper.find('h5');

	expect(h5.hasClass('ui')).toBeTruthy();
	expect(h5.hasClass('right')).toBeTruthy();
	expect(h5.hasClass('floated')).toBeTruthy();
	expect(h5.hasClass('header')).toBeTruthy();
});

it('has an i element', () => {
	expect(wrapper.find('i').length).toEqual(1);
});

it('the i element has the classes moon outline icon', () => {
	const icon = wrapper.find('i');

	expect(icon.hasClass('moon')).toBeTruthy();
	expect(icon.hasClass('outline')).toBeTruthy();
	expect(icon.hasClass('icon')).toBeTruthy();
});

it('has three column divs', () => {
	expect(wrapper.find('.column').length).toEqual(3);
});

it('the second div has class "ui two column grid container', () => {
	const secondDiv = wrapper.find('div').at(1);

	expect(secondDiv.hasClass('ui')).toBeTruthy();
	expect(secondDiv.hasClass('two')).toBeTruthy();
	expect(secondDiv.hasClass('column')).toBeTruthy();
	expect(secondDiv.hasClass('grid')).toBeTruthy();
	expect(secondDiv.hasClass('container')).toBeTruthy();
});

it('the third div has class column', () => {
	const thirdDiv = wrapper.find('div').at(2);

	expect(thirdDiv.hasClass('column')).toBeTruthy();
});

it('the third div has class column', () => {
	const fourthDiv = wrapper.find('div').at(3);

	expect(fourthDiv.hasClass('column')).toBeTruthy();
});
