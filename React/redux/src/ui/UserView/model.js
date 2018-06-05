const REQUEST_HISTORY_SUCCESS = 'REQUEST_HISTORY_SUCCESS';
const REQUEST_HISTORY_FAILED = 'REQUEST_HISTORY_FAILED';

// actions
function requestHistorySuccess(val){
	return {
		type: 		REQUEST_HISTORY_SUCCESS,
		payload: 	val
	};
}

function requestHistoryFailed(){
	return {
		type: REQUEST_HISTORY_FAILED
	};
}

async function getLoginHistory(dispatch, context){
	const { vars: {selectedUser}, user } = context;

	try {
		const response = await fetch(`/aps/2/resources/${selectedUser.aps.id}/loginHistory?sort(-loginTime),limit(${user.aps.id === selectedUser.aps.id ? "1" : "0"},1)`);
		const loginHistoryItems = await response.json();
		const lastLoginHistory = loginHistoryItems.length > 0 ? loginHistoryItems[0] : undefined;
		dispatch(requestHistorySuccess(lastLoginHistory && new Date(lastLoginHistory.loginTime)));
	} catch(e){
		dispatch(requestHistoryFailed());
	}
}

function requestHistory(context) {
	return dispatch => getLoginHistory(dispatch, context);
}

export const actions = { requestHistoryFailed, requestHistorySuccess, requestHistory };


// reducers
const initialState = {
	loginTime: undefined
};

export function rootReducer(state = initialState, action){
	switch (action.type) {
		case REQUEST_HISTORY_SUCCESS:
			return {
				loginTime: action.payload
			};
		default:
			return initialState;
	}
}