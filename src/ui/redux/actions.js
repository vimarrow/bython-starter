import actions from './actionConstants';

export function startGoogleLoginAuth() {
	return {type: `${actions.AUTH.GOOGLE}_${actions.LOADING_STATE.LOADING}`};
}

export function loginUserWithGoogle(token, profile) {
	return {type: `${actions.AUTH.GOOGLE}_${actions.LOADING_STATE.LOADED}`, payload: {token, profile}};
}

export function googleLoginFail(error) {
	return {type: `${actions.AUTH.GOOGLE}_${actions.LOADING_STATE.LOAD_ERR}`, payload: {error}};
}

export function doLogout() {
	return {type: `${actions.AUTH.LOGOUT}`};
}