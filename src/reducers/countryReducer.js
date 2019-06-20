import {
	FETCH_COUNTRIES,
	FETCH_COUNTRIES_BY_CODE,
	SELECT_COUNTRY,
	SELECT_REGION
} from '../actions/types';

const INITIAL_STATE = {
	countryList: [],
	selectedCountry: {},
	borderCountries: [],
	selectedRegion: ''
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_COUNTRIES:
			return { ...state, countryList: action.payload };
		case FETCH_COUNTRIES_BY_CODE:
			return { ...state, borderCountries: action.payload };
		case SELECT_COUNTRY:
			return { ...state, selectedCountry: action.payload };
		case SELECT_REGION:
			return { ...state, selectedRegion: action.payload };
		default:
			return state;
	}
};
