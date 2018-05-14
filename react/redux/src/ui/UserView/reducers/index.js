import { REQUEST_HISTORY_SUCCESS } from "../constants";

const initialState = {
	loginTime: undefined
};

export default function userstate(state = initialState, action){
	switch (action.type) {
		case REQUEST_HISTORY_SUCCESS:
			return {
				loginTime: action.payload
			};
		default:
			return initialState;
	}
}