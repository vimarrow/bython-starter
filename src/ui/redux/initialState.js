const defaultLoadingFlags = {
	loaded: false,
	loading: false,
	loadErr: false
};

export default {
	auth: {
		token: null,
		loadingFlags: defaultLoadingFlags,
		profile: null
	}
}
