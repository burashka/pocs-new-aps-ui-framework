import { SET_SEND_INVITATION } from '../constants/options';

const initialState = {
	sendInvitation: false
};

export default function options(state = initialState, action){
	switch (action.type) {
		case SET_SEND_INVITATION:
			return {
				sendInvitation: action.payload
			};
		default:
			return state;
	}
}