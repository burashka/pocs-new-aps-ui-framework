import React, { Component } from 'react';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

import Panel from '../../platform/Panel';
import CheckBox from '../../platform/CheckBox';
import { context } from '../../platform/props';

import _ from '../../mocks/i18next';

import EditUserForm from '../components/EditUserForm';
import rootReducer from './reducers';
import * as optionsActions from './actions/OptionsActions';
import * as servicesActions from './actions/ServicesActions';
import * as usersActions from './actions/UsersActions';
import userTemplate from './userTemplate';

class EditView extends Component {
	render(){
		const {
			context: {wizardState=[]},
			users, services, options,
			servicesActions, optionsActions, usersActions
		} = this.props;

		return <React.Fragment>
			{ users.map((user, i) => {
				return <EditUserForm
					key = { user.id }
					user = {user}
					needRemove = { users.length !== 1 }
					needAdd = { i+1 === users.length }
					onRemoveUser = { () => {
						usersActions.removeUser(i);
					} }
					onAddUser = { () => {
						usersActions.addUser({ id: users.length, ...userTemplate });
					} }
					onUserChange = { (user) => {
						usersActions.changeUser(user);
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
							servicesActions[e.target.checked ? "assignService" : "unassignService"](serviceItem.id);
						}}
					/>;
				}) }
			</Panel>
			<Panel title = { _("Select Options") }>
				<CheckBox
					description = { _("Send activation email to users") }
					hint = { _("Users will be given an activation link to log in to the Control Panel and enable services assigned.") }
					checked = { options.sendInvitation }
					onChange = { (e) => optionsActions.setSendInvitation(e.target.checked) }
				/>
			</Panel>
		</React.Fragment>;
	}
}

EditView.propTypes = {
	context
};

const store = createStore(rootReducer);

function mapDispatchToProps(dispatch){
	return {
		optionsActions: bindActionCreators(optionsActions, dispatch),
		servicesActions: bindActionCreators(servicesActions, dispatch),
		usersActions: bindActionCreators(usersActions, dispatch)
	};
}

const EditViewConnected = connect(state => state, mapDispatchToProps)(EditView);

export default ({context}) => {
	return <Provider store = { store }>
		<EditViewConnected
			context = { context }
		/>
	</Provider>;
};