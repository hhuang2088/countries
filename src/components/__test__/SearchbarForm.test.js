import React from 'react';
import Root from '../../Root';
import { mount } from 'enzyme';
import SearchbarForm from '../Searchbar/SearchbarForm';

let wrapper;

beforeEach(() => {
	wrapper = mount(
		<Root>
			<SearchbarForm />
		</Root>
	);
});

afterEach(() => {
	wrapper.unmount();
});

it('has a form', () => {
	expect(wrapper.find('form').length).toEqual(1);
});

it('has three divs', () => {
	expect(wrapper.find('div').length).toEqual(3);
});

it('has four Field components', () => {
	expect(wrapper.find('Field').length).toEqual(4);
});

it('has six options elements', () => {
	expect(wrapper.find('option').length).toEqual(6);
});

it('the second option element has a value of Africa', () => {
	expect(wrapper.find('option').at(1).prop('value')).toEqual('Africa');
});

it('the third option element has a value of Americas', () => {
	expect(wrapper.find('option').at(2).prop('value')).toEqual('Americas');
});

it('the fourth option element has a value of Asia', () => {
	expect(wrapper.find('option').at(3).prop('value')).toEqual('Asia');
});

it('the fifth option element has a value of Europe', () => {
	expect(wrapper.find('option').at(4).prop('value')).toEqual('Europe');
});

it('the sixth option element has a value of Oceania', () => {
	expect(wrapper.find('option').at(5).prop('value')).toEqual('Oceania');
});
