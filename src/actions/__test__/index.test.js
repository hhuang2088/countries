import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import moxios from 'moxios';
import {
	fetchCountries,
	selectCountry,
	selectRegion,
	fetchCountriesByCode,
	toggleDarkMode,
} from '../';
import {
	FETCH_COUNTRIES,
	SELECT_COUNTRY,
	SELECT_REGION,
	FETCH_COUNTRIES_BY_CODE,
	TOGGLE_DARKMODE
} from '../types';
import mockFetch from './mockFetch';

const middlewares = [reduxThunk];
const mockStore = configureStore(middlewares);
let actions;
let expectedPayload;
let initialState;
let store;

beforeEach(() => {
	initialState = {};
	store = mockStore(initialState);
});

describe('selectCountries action', () => {
	it('has the right payload', () => {
		store.dispatch(selectCountry('country'));
		actions = store.getActions();
		expectedPayload = {type: SELECT_COUNTRY, payload: 'country'};
		expect(actions).toEqual([expectedPayload]);
	});
});

describe('selectRegion action', () => {
	it('has the right payload', () => {
		store.dispatch(selectRegion('Region'));
		actions = store.getActions();
		expectedPayload = {type: SELECT_REGION, payload: 'Region'};
		expect(actions).toEqual([expectedPayload]);
	});
});

describe('toggleDarkMode action', () => {
	it('returns an empty string when the string "inverted" is passed', () => {
		store.dispatch(toggleDarkMode('inverted'));
		actions = store.getActions();
		expectedPayload = {type: TOGGLE_DARKMODE, payload: ''};
		expect(actions).toEqual([expectedPayload]);
	});

	it('returns the string "inverted" when an empty string is passed', () => {
		store.dispatch(toggleDarkMode(''));
		actions = store.getActions();
		expectedPayload = {type: TOGGLE_DARKMODE, payload: 'inverted'};
		expect(actions).toEqual([expectedPayload]);
	});
});

describe('fetchCountries action', () => {
	beforeEach(() => {
		moxios.install();
		moxios.stubRequest('https://restcountries.eu/rest/v2/name/countries', {
			status: 200,
			response: mockFetch
		});
	});
	afterEach(() => {
		moxios.uninstall();
	});

	it('returns an array of objects', () => {
		const expectedPayload = {
			type: FETCH_COUNTRIES,
			payload: mockFetch
		};
		moxios.wait(() => {
			store.dispatch(fetchCountries('countries')).then(() => {
				actions = store.getActions();
				expect(actions).toEqual(expectedPayload);
			});
		});
	});
});

describe('fetchCountriesByCode action', () => {
	beforeEach(() => {
		moxios.install();
		moxios.stubRequest('https://restcountries.eu/rest/v2/alpha?codes=USA;GBR;CHN;AUS;COG;BRA', {
			status: 200,
			response: mockFetch
		});
	});
	afterEach(() => {
		moxios.uninstall();
	});

	it('returns an array of objects when given an array of country codes', () => {
		const expectedPayload = {
			type: FETCH_COUNTRIES_BY_CODE,
			payload: mockFetch
		};
		moxios.wait(() => {
			store.dispatch(fetchCountriesByCode([ 'USA', 'GBR', 'CHN', 'AUS', 'COG', 'BRA' ]).then(() => {
				actions = store.getActions();
				expect(actions).toEqual(expectedPayload);
			}))
		});
	});

	it('returns an empty array when given an empty array', () => {
		const expectedPayload = [{
			type: FETCH_COUNTRIES_BY_CODE,
			payload: []
		}];
		store.dispatch(fetchCountriesByCode([]));
		actions = store.getActions();
		expect(actions).toEqual(expectedPayload);
	});
});
