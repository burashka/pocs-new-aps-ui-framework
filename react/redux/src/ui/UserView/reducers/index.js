import { REQUEST_HISTORY, REQUEST_HISTORY_SUCCESS } from "../constants";

const initialState = {
	loginTime: undefined
};

export default function userstate(state = initialState, action){
	switch (action.type) {
		case REQUEST_HISTORY:
			return {
				sendInvitation: action.payload
			};
		case REQUEST_HISTORY_SUCCESS:
			return {
				sendInvitation: action.payload
			};
		default:
			return state;
	}
}