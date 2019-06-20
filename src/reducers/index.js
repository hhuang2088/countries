import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import countryReducer from './countryReducer';
import interfaceReducer from './interfaceReducer';

export default combineReducers({
	countries: countryReducer,
	form: formReducer,
	interface: interfaceReducer
});
