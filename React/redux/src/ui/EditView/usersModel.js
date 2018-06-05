import userTemplate from "./userTemplate";

const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const CHANGE_USER = 'CHANGE_USER';

//actions
function addUser(val){
	return {
		type: 		ADD_USER,
		payload: 	val
	}
}

function removeUser(val){
	return {
		type: 		REMOVE_USER,
		payload: 	val
	}
}

function changeUser(val){
	return {
		type: 		CHANGE_USER,
		payload: 	val
	}
}

export const actions = { addUser, removeUser, changeUser };

// reducer
function findUser(users, user){
	return users.findIndex(item => item.id === user.id);
}

export function reducer(state = [{ id: 0, ...userTemplate }], action){
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