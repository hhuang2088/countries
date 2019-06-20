import { TOGGLE_DARKMODE } from '../actions/types';

const INITIAL_STATE = {
	display: ''
};

export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case TOGGLE_DARKMODE:
			return { ...state, display: action.payload };
		default:
			return state;
	};
}
