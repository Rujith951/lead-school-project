import {
	CLEAR_DATA,
	FETCH_POSTAL_ERROR,
	FETCH_POSTAL_LOADING,
	FETCH_POSTAL_SUCCESS,
} from "./actions";

function fetchPostalError(error) {
	return { type: FETCH_POSTAL_ERROR, payload: error };
}

function fetchPostalSuccess(data) {
	return { type: FETCH_POSTAL_SUCCESS, payload: data };
}

function fetchPostalLoading() {
	return { type: FETCH_POSTAL_LOADING };
}

function clearData() {
	return { type: CLEAR_DATA };
}

function getPostalData(pincode) {
	return async dispatch => {
		dispatch(fetchPostalLoading());
		try {
			const response = await fetch(`https://api.zippopotam.us/in/${pincode}`);
			if (response.status === 404) {
				throw new Error(
					`Pincode : ${pincode} is not valid. Please enter a valid pincode ex:110001,522001,522002`
				);
			}
			const data = await response.json();
			dispatch(fetchPostalSuccess(data));
		} catch (err) {
			dispatch(fetchPostalError(err.message));
		}
	};
}

export {
	fetchPostalSuccess,
	fetchPostalError,
	fetchPostalLoading,
	getPostalData,
	clearData,
};
