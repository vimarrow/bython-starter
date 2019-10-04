import actions from './actionConstants';
import {setLoadingAs, LOADED, LOADING, LOAD_ERR} from './utils';

export default {
	[`${actions.AUTH.GOOGLE}_${actions.LOADING_STATE.LOADING}`]: (draft) => setLoadingAs(draft, LOADING),
	[`${actions.AUTH.GOOGLE}_${actions.LOADING_STATE.LOADED}`]: (draft, payload) => {
		setLoadingAs(draft, LOADED);
		draft.profile = payload.profile;
		draft.token = payload.token;
	},
	[`${actions.AUTH.GOOGLE}_${actions.LOADING_STATE.LOAD_ERR}`]: (draft) => setLoadingAs(draft, LOAD_ERR),
	[`${actions.AUTH.LOGOUT}`]: (draft) => { draft.profile = null; }
};
