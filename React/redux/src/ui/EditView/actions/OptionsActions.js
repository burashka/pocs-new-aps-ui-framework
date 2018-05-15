import { SET_SEND_INVITATION } from '../constants/options';

export function setSendInvitation(val){
	return {
		type: 		SET_SEND_INVITATION,
		payload: 	val
	}
}