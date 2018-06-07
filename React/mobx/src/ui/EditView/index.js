/* Example of View with forms */

import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Panel from '../../platform/Panel';
import CheckBox from '../../platform/CheckBox';
import { context } from '../../platform/props';

import _ from '../../platform/mocks/i18next';

import EditUserForm from '../components/EditUserForm';
import usersStore from './usersStore';
import servicesStore from './servicesStore';
import optionsStore from './optionsStore';

const Users = observer(({ store, store: {users} }) => {
	return <React.Fragment>
		{ users.map((user, i) => {
			return <EditUserForm
				key = { user.id }
				user = {user}
				needRemove = { users.length !== 1 }
				needAdd = { i+1 === users.length }
				onRemoveUser = { () => {
					store.removeUser(i);
				} }
				onAddUser = { () => store.addUser() }
				onUserChange = { user => store.changeUser(user) }
			/>;
		}) }
	</React.Fragment>;
});

const Services = observer(({ wizardState, store, store: {services} }) => {
	return <Panel title = { _("Assign Services To New User") }>
		{ wizardState.map((serviceItem, i) => {
			return <CheckBox
				key = { serviceItem.id }
				description = { serviceItem.label }
				checked = { services.includes(serviceItem.id) }
				onChange = {e => {
					store[e.target.checked ? "assignService" : "unassignService"](serviceItem.id);
				}}
			/>;
		}) }
	</Panel>;
});

const Options = observer(({ store, store: {sendInvitation} }) => {
	return <Panel title = { _("Select Options") }>
		<CheckBox
			description = { _("Send activation email to users") }
			hint = { _("Users will be given an activation link to log in to the Control Panel and enable services assigned.") }
			checked = { sendInvitation }
			onChange = { e => store.setSendInvitation(e.target.checked) }
		/>
	</Panel>;
});

const EditView = observer(class EditView extends Component {
	render(){
		const { context: { wizardState = [] } } = this.props;

		return <React.Fragment>
			<Users store = { usersStore } />
			<Services wizardState = { wizardState } store = { servicesStore } />
			<Options store = { optionsStore } />
		</React.Fragment>;
	}
});

EditView.propTypes = {
	context
};

export default EditView;