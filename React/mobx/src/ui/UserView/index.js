/* Example of View with ajax */

import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Panel from '../../platform/Panel';
import Button from '../../platform/Button';
import Output from '../../platform/Output';
import Message from '../../platform/Message';
import { context } from '../../platform/props';

import _ from '../../platform/mocks/i18next';
import { checkPrivilege } from '../../platform/mocks/apsc';

import store from './store';

function getStatus(user) {
	switch (user.aps.status) {
		case "aps:proto":
			return "creating";
		case "aps:configuring":
		case "aps:provisioning":
			return "updating";
		case "aps:unprovisioning":
			return "deleting";
		case "aps:deleted":
			return "deleted";
		case "aps:ready":
			if (!Array.isArray(user.services)) {
				console.warn("[ERROR] UserStatus cant resolve user services status: they were not loaded to model");
			} else
			if (user.services.some(function(service) {
				return	"aps:updating" === service.aps.status ||
					"aps:deleting" === service.aps.status ||
					"aps:provisioning" === service.aps.status ||
					"aps:configuring" === service.aps.status;
			})) {
				return "configuringServices";
			}

		default:
			if (user.disabled) {
				return "disabled";
			}

			if (user.locked) {
				return "locked";
			}

			if (!!user.invitationDate) {
				return "invited";
			}
	}

	return "ready";
}

function calculateDiff(invitationDate){
	const currentDate = new Date();
	invitationDate = new Date(invitationDate);
	const timeDiff = currentDate.getTime() - invitationDate.getTime();
	return Math.ceil(timeDiff / (1000 * 3600));
}

function MessageList({ disabled, locked, status, invitationDate}){
	return <React.Fragment>
		{ disabled &&
		<Message bsStyle = "warning">
			{ _("The user has been disabled. He/she is not able to log in to Control Panel or use assigned services.") }
		</Message> }
		{ locked &&
		<Message bsStyle = "warning">
			{ _("The user has exceeded amount of allowed login attempts and got locked. Click Unlock to enable login back.") }
		</Message>}
		{ status === "invited" &&
		<Message bsStyle = "warning">
			{ calculateDiff(invitationDate) > 48
				? _("The user did not complete the activation. You need to resend an invitation, because the activation link has expired.")
				: _("The user did not yet complete the activation. The activation link emailed to the user, expires in 48 hours. If needed, you can resend an invitation.") }
		</Message> }
	</React.Fragment>;
}

function Toolbar({ hasManagePrivilege, hasLoginAsPermission, isCurrentUser, btnStatus, givenName, isAdmin }) {
	return <React.Fragment>
		{ hasManagePrivilege
		&& hasLoginAsPermission
		&& !isCurrentUser
		&& btnStatus
		&& <Button
			bsStyle = "primary"
			label = {_(`Login as ${givenName }`)}
		/>
		}
		{ hasManagePrivilege
		&& !isCurrentUser
		&& btnStatus
		&& <Button
			bsStyle = "primary"
			label = {_("Reset password")}
		/>
		}
		{ (isCurrentUser && !invitationDate) && <Button
			bsStyle = "primary"
			label = {_("Change Password")}
		/>
		}
		{ (!isAdmin || !isCurrentUser) && <Button
			bsStyle = "danger"
			label = {_("Delete")}
		/> }
	</React.Fragment>
}

function UserSettings({ isAdmin, user: { fullName, telWork, telCell, login, email, notificationEmail } }) {
	const isEmailHidden = login === email && (!notificationEmail || notificationEmail === email);
	const isNotificationEmailHidden = isAdmin || !notificationEmail || (notificationEmail === email && notificationEmail === login);

	return <Panel
		title = { _("User Settings") }
	>
		<Output label={_("Name")} value={fullName} />
		<Output label={_("Role")} value={isAdmin ? _("Admin") : _("User")} />
		<Output label={_("Phone")} value={telWork} />
		<Output label={_("Mobile Phone")} value={telCell} />
		<Output label={_("Language")} value={_("English (United States)")} />
		<Output
			label={ isEmailHidden && isNotificationEmailHidden ? _("Email") : _("Email (To Sign In)")}
			value={login}
		/>
		{!isEmailHidden && <Output label={_("Personal Email")} value={email} />}
		{!isNotificationEmailHidden && <Output label={_("Notification Email")} value={notificationEmail} />}
	</Panel>;
}

const LoginHistory = observer(({ isCurrentUser, store: { loginTime } }) => {
	return <Panel title = { _("Login History") }>
		<Output
			label={ loginTime && _("Last accessed")}
			value={ loginTime ? loginTime : (isCurrentUser ? _("It’s the first time you logged in.") : _("This user has never logged in.")) }
		/>
	</Panel>;
});

class UserView extends Component {
	componentDidMount(){
		store.requestHistory(this.props.context);
	}

	render() {
		const { vars: {selectedUser}, user } = this.props.context;
		const { disabled, locked, invitationDate, addressPostal, givenName } = selectedUser;
		const isAdmin = selectedUser.aps.type.includes("http://parallels.com/aps/types/pa/admin-user");
		const isCurrentUser = user.aps.id === selectedUser.aps.id;
		const status = getStatus(selectedUser);

		return <React.Fragment>
			<MessageList
				disabled = { disabled }
				locked = {locked}
				status = {status}
				invitationDate = {invitationDate}
			/>
			<Toolbar
				hasManagePrivilege = {
					!user.isAccountAdmin || checkPrivilege("http://www.parallels.com/pa/pa-core-services#own_account-manage")
				}
				hasLoginAsPermission = {
					checkPrivilege(`http://www.parallels.com/pa/pa-core-services#${isAdmin ? "own_users-manage": "mycp_access"}`)
				}
				isCurrentUser = { isCurrentUser }
				btnStatus = { ["ready", "updating", "locked", "disabled"].includes(status) }
				givenName = { givenName }
				isAdmin = { isAdmin }
			/>
			<UserSettings
				isAdmin = { isAdmin }
				user = { selectedUser }
			/>
			<Panel title = { _("Postal Address") }>
				<Output value={`${addressPostal.locality}, ${addressPostal.extendedAddress}`} />
			</Panel>
			<LoginHistory
				isCurrentUser = { isCurrentUser }
				store = { store }
			/>
		</React.Fragment>;
	}
}

UserView.propTypes = {
	context
};

export default UserView;