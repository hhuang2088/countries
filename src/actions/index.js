import countries from '../api/countries';
import {
	FETCH_COUNTRIES,
	FETCH_COUNTRIES_BY_CODE,
	SELECT_COUNTRY,
	SELECT_REGION,
	TOGGLE_DARKMODE
} from './types';

export const fetchCountries = (search) => async dispatch => {
	const response = await countries.get(`/name/${search}`);
	dispatch({ type: FETCH_COUNTRIES, payload: response.data });
};

export const selectCountry = (country) => async dispatch => {
	dispatch({ type: SELECT_COUNTRY, payload: country });
};

export const selectRegion = (region) => dispatch => {
	dispatch({ type: SELECT_REGION, payload: region });
}

export const fetchCountriesByCode = (codes) => async dispatch => {
	const codesQuery = codes.join(';');
	const response = await countries.get(`/alpha?codes=${codesQuery}`);
	dispatch({ type: FETCH_COUNTRIES_BY_CODE, payload: response.data});
}

export const toggleDarkMode = (display) => async dispatch => {
	let response;

	if(display === 'inverted') {
		document.body.classList.remove('inverted');
		response = '';
	} else {
		document.body.classList.add('inverted');
		response = 'inverted';
	}
	dispatch({ type: TOGGLE_DARKMODE, payload: response });
}
