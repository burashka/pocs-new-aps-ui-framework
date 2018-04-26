import React, { Component, PropTypes} from 'react';

import update from 'immutability-helper';

import Panel from '../components/Panel';
import TextBox from '../components/TextBox';
import CheckBox from '../components/CheckBox';
import Select from '../components/Select';
import Button from '../components/Button';

import _ from '../mocks/i18next';

const userTemplate = {
	givenName: 	"",
	familyName: "",
	type: 		"User",
	login: 		"",
	notificationEmail: "",
	hasNotificationEmail: false,
	vps: 		false,
	sendInvitation: false
};

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			services: [],
			users: []
		};
		this.state.users.push(Object.assign({ id: this.state.users.length }, userTemplate));
	}

	render(){
		const self = this;

		const { wizardState=[] } = this.props;

		const users = this.state.users;
		const services = this.state.services;

		return <div>
			{ users.map((user, i) => {
				const hasNotificationEmail = user.hasNotificationEmail;

				return <Panel
					key = { user.id }
					id = { user.id }
					title = { _("Specify New User")}
				>
					<TextBox
						label = { _("First Name") }
						placeholder={ _("e.g.: John") }
						value = { user.givenName }
						onChange = { (e) => {
							const idx = users.findIndex(item => item.id === user.id);
							self.setState({
								'users': update(users, { [idx]: { givenName: { $set: e.target.value } } })
							});
						} }
					/>
					<TextBox
						label = { _("Last Name") }
						placeholder={ _("e.g.: Smith") }
						value = { user.familyName }
						onChange = { (e) => {
							const idx = users.findIndex(item => item.id === user.id);
							self.setState({
								'users': update(users, { [idx]: { familyName: { $set: e.target.value } } })
							});
						} }
					/>
					<Select
						label = { _("Role Name") }
						placeholder={ _("e.g.: John") }
						options = {[
							{ label: "User", value: "User" },
							{ label: "Admin", value: "Admin" }
						]}
						value = { user.type }
						onChange = { (e) => {
							const idx = users.findIndex(item => item.id === user.id);
							self.setState({
								'users': update(users, { [idx]: { type: { $set: e.target.value } } })
							});
						} }
					/>
					<TextBox
						label={ hasNotificationEmail ? _("Email Name") :_("Email (To Sign In)")  }
						placeholder={ _("e.g.: John") }
						description={
							hasNotificationEmail
								? _("This email address will be used to sign in and receive notifications.")
								: _("You'll use it to sign in.")
						}
						value = { user.login }
						onChange = { (e) => {
							const idx = users.findIndex(item => item.id === user.id);
							self.setState({
								'users': update(users, { [idx]: { login: { $set: e.target.value } } })
							});
						} }
					/>
					{ hasNotificationEmail && <TextBox
						description = { _("We'll use this email for account and system updates.") }
						label = { _("Notification Email") }
						value = { user.notificationEmail }
						onChange = { (e) => {
							const idx = users.findIndex(item => item.id === user.id);
							self.setState({
								'users': update(users, { [idx]: { notificationEmail: { $set: e.target.value } } })
							});
						} }
					/> }
					<CheckBox
						description = { _("Use different emails to sign in and receive notifications.") }
						checked = { user.hasNotificationEmail }
						onChange = { (e) => {
							const idx = users.findIndex(item => item.id === user.id);
							self.setState({
								'users': update(users, { [idx]: { hasNotificationEmail: { $set: e.target.value } } })
							});
						} }
					/>
					{ i+1 === users.length && <Button
						bsStyle = "primary"
						label = { _("On More User") }
						onClick = { () => {
							self.setState({
								'users': update(users, { $push: [
									Object.assign({ id: users.length }, userTemplate)
								]})
							});
						}}
					/> }
					{ users.length !== 1 && <Button
						label = { _("Remove User") }
						onClick = { () => {
							self.setState({
								'users': update(users, { $splice: [[i, 1]]})
							});
						}}
					/> }
				</Panel>
			}) }
			<Panel title = { _("Assign Services To New User") }>
				{ wizardState.map((serviceItem, i) => {
					return <CheckBox
						key = { serviceItem.id }
						description = { serviceItem.label }
						checked = { services.includes(serviceItem.id) }
						onChange = {e => {
							const action = e.target.checked ? { $push: [serviceItem.id] } : { $splice: [[i, 1]]};

							self.setState({ 'services': update(services, action) });
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
		</div>;
	}
}