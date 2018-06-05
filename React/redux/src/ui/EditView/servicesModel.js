const ASSIGN_SERVICE = 'ASSIGN_SERVICE';
const UNASSIGN_SERVICE = 'UNASSIGN_SERVICE';

//actions
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

export const actions = { assignService, unassignService };

// reducer
export function reducer(state = [], action){
	switch (action.type) {
		case ASSIGN_SERVICE:
			return [...state, action.payload];
		case UNASSIGN_SERVICE:
			return [...state].filter(item => item !== action.payload);
		default:
			return state;
	}
}