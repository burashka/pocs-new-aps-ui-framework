const SET_SEND_INVITATION = 'SET_SEND_INVITATION';

//action
function setSendInvitation(val){
	return {
		type: 		SET_SEND_INVITATION,
		payload: 	val
	}
}

export const actions = { setSendInvitation };

// reducer
export function reducer(state = { sendInvitation: false }, action){
	switch (action.type) {
		case SET_SEND_INVITATION:
			return {
				sendInvitation: action.payload
			};
		default:
			return state;
	}
}