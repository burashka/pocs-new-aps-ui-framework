import { ADD_USER, REMOVE_USER, CHANGE_USER } from '../constants/users';

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

export { addUser, removeUser, changeUser };