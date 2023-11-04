import {
	FETCH_POSTAL_ERROR,
	FETCH_POSTAL_SUCCESS,
	FETCH_POSTAL_LOADING,
	CLEAR_DATA,
} from "./Actions";

const initialState = {
	loading: false,
	data: {},
	error: "",
};

function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case FETCH_POSTAL_LOADING:
			return { ...state, loading: true };
		case FETCH_POSTAL_SUCCESS:
			return { ...state, data: payload, loading: false };
		case FETCH_POSTAL_ERROR:
			return { ...state, error: payload, loading: false };
		case CLEAR_DATA:
			return { ...state, data: {} };
		default:
			return state;
	}
}

export default reducer;
