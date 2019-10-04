import { produce } from 'immer';
import reducers from './reducers';
import { combineReducers } from 'redux';
import initialState from './initialState';

function authReducer(state = initialState.auth, {type, payload}) {
	return produce(state, draft => {
		if (typeof reducers[type] === 'function') {
			return reducers[type](draft, payload, state);
		}
		return state;
	});
};

export default combineReducers({
	auth: authReducer
});