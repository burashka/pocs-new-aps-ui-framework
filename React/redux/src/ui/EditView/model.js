import {combineReducers} from "redux";

import { reducer as users, actions as usersActions } from "./usersModel";
import { reducer as services, actions as servicesActions } from "./servicesModel";
import { reducer as options, actions as optionsActions } from "./optionsModel";

export const actions = {
	users: usersActions,
	services: servicesActions,
	options: optionsActions
};

export const rootReducer = combineReducers({
	users,
	services,
	options
});