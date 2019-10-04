export const LOADED = 'loaded';
export const LOADING = 'loading';
export const LOAD_ERR = 'loadErr';

export const setLoadingAs = (derivedDraft, type) => {
	derivedDraft.loadingFlags = {
		loading: type === LOADING,
		loaded: type === LOADED,
		loadErr: type === LOAD_ERR
	};
}