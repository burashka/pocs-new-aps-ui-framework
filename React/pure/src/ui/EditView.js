/* Example of View with forms */

import React, { Component } from 'react';

import Panel from '../platform/Panel';
import CheckBox from '../platform/CheckBox';
import { context } from '../platform/props';

import _ from '../platform/mocks/i18next';

import EditUserForm from './components/EditUserForm';

const userTemplate = {
	givenName: 	"",
	familyName: "",
	type: 		"User",
	login: 		"",
	notificationEmail: "",
	hasNotificationEmail: false,
	sendInvitation: false
};

class EditView extends Component {
	constructor(props){
		super(props);

		this.state = {
			services: [],
			users: [{ id: 0, ...userTemplate }],
			sendInvitation: false
		};
	}

	render(){
		const self = this;

		const { context: {wizardState=[]} } = this.props;

		const users = this.state.users;
		const services = this.state.services;

		return <React.Fragment>
			{ users.map((user, i) => {
				return <EditUserForm
					key = { user.id }
					user = {user}
					needRemove = { users.length !== 1 }
					needAdd = { i+1 === users.length }
					onRemoveUser = { () => {
						users.splice(i, 1);
						self.setState({ users });
					} }
					onAddUser = { () => {
						users.push({ id: users.length, ...userTemplate });
						self.setState({ users });
					} }
					onUserChange = { (user) => {
						const idx = users.findIndex(item => item.id === user.id);
						if (idx > -1) users[idx] = user;

						self.setState({ users });
					} }
				/>;
			}) }
			<Panel title = { _("Assign Services To New User") }>
				{ wizardState.map((serviceItem, i) => {
					return <CheckBox
						key = { serviceItem.id }
						description = { serviceItem.label }
						checked = { services.includes(serviceItem.id) }
						onChange = {e => {
							if (e.target.checked){
								services.push(serviceItem.id);
							} else {
								services.splice(i, 1);
							}

							self.setState({ services });
						}}
					/>;
				}) }
			</Panel>
			<Panel title = { _("Select Options") }>
				<CheckBox
					description = { _("Send activation email to users") }
					hint = { _("Users will be given an activation link to log in to the Control Panel and enable services assigned.") }
					checked = { this.state.sendInvitation }
					onChange = { (e) => self.setState({ 'sendInvitation': e.target.checked }) }
				/>
			</Panel>
		</React.Fragment>;
	}
}

EditView.propTypes = {
	context
};

export default EditView;