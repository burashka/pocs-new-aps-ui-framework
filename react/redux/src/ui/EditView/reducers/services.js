import {ASSIGN_SERVICE, UNASSIGN_SERVICE} from "../constants/services";

const initialState = [];

export default function services(state = initialState, action){
	switch (action.type) {
		case ASSIGN_SERVICE:
			return [...state, action.payload];
		case UNASSIGN_SERVICE:
			return [...state].filter(item => item !== action.payload);
		default:
			return state;
	}
}