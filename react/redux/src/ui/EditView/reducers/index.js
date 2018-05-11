import { combineReducers } from 'redux';
import users from './users';
import services	from './services';
import options from './options';

export default combineReducers({
	users,
	services,
	options
});