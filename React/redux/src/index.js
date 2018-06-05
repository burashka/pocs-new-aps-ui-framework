import React from 'react';
import { render } from 'react-dom';
import EditView from './ui/EditView';
import UserView from './ui/UserView';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

import { rootReducer as userViewState } from './ui/UserView/model';
import { rootReducer as editViewState } from './ui/EditView/model';

const wizardState = [{
	id: "vps",
	label: "Add VPS"
}];

const vars = {
	"selectedUser":{
		"addressPostal": {
			"streetAddress": "Khimki",
			"postalCode": "141410",
			"locality": "Khimki",
			"countryName": "ru",
			"extendedAddress": "Leningradskoe 66",
			"region": "MOS"
		},
		"telCell": "7#926#1234567#",
		"telWork": "7#926#1234567#",
		"aps": {
			"modified": "2017-11-21T10:46:53Z",
			"id": "78ffbc39-ce89-a2d9-ca96-a3cbf6c1a71b",
			"type": "http://parallels.com/aps/types/pa/service-user/1.2",
			"status": "aps:ready",
			"revision": 2
		},
		"displayName": "Konstantine Konstantinopolskii",
		"givenName": "Konstantine",
		"fullName": "Konstantine Konstantinopolskii",
		"locale": "en_US",
		"login": "konst@example.com",
		"userId": 73,
		"isAccountAdmin": false,
		"familyName": "Konstantinopolskii",
		"disabled": false,
		"locked": false,
		"email": "konst@sample.com",
		"servicesMode": "NONE"
	}
};
const user = {
	"addressPostal": {
		"streetAddress": "Khimki",
		"postalCode": "141410",
		"locality": "Khimki",
		"countryName": "ru",
		"extendedAddress": "Leningradskoe 66",
		"region": "MOS"
	},
	"telCell": "7#926#1234567#",
	"aps": {
		"modified": "2017-10-30T11:24:38Z",
		"id": "57109936-e1d7-4538-8187-a827b8e52d9d",
		"type": "http://parallels.com/aps/types/pa/admin-user/1.2",
		"status": "aps:ready",
		"revision": 2
	},
	"displayName": "Harry Potter",
	"givenName": "Harry",
	"fullName": "Harry Potter",
	"telWork": "7#926#1234567#",
	"locale": "en_US",
	"login": "hp@example.com",
	"userId": 61,
	"telFax": "",
	"isAccountAdmin": true,
	"familyName": "Potter",
	"disabled": false,
	"locked": false,
	"additionalName": "",
	"email": "hp@example.com",
	"memberId": 1000016,
	"servicesMode": "NONE"
};

const View = window.location.href.includes("Edit") ? EditView : UserView;

const reducer = combineReducers({ userViewState, editViewState });
const store = createStore(reducer, applyMiddleware(thunk));

render(
	<Provider store = { store }>
		<View context={{ wizardState, vars, user }}/>
	</Provider>,
	document.getElementById('root')
);