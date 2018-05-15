import {ADD_USER, REMOVE_USER, CHANGE_USER} from "../constants/users";
import userTemplate from '../userTemplate';

const initialState = [{ id: 0, ...userTemplate }];

function findUser(users, user){
	return users.findIndex(item => item.id === user.id);
}

export default function services(state = initialState, action){
	let users, idx;

	switch (action.type) {
		case ADD_USER:
			return [...state, action.payload];
		case REMOVE_USER:
			users = [...state];
			users.splice(action.payload, 1);
			return users;
		case CHANGE_USER:
			users = [...state];
			idx = findUser(users, action.payload);
			if (idx > -1) users[idx] = action.payload;
			return users;
		default:
			return state;
	}
}