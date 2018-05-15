import { ASSIGN_SERVICE, UNASSIGN_SERVICE } from '../constants/services';

function assignService(val){
	return {
		type: 		ASSIGN_SERVICE,
		payload: 	val
	}
}

function unassignService(val){
	return {
		type: 		UNASSIGN_SERVICE,
		payload: 	val
	}
}

export { assignService, unassignService };