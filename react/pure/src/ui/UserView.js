import React, { Component } from 'react';

import Panel from '../platform/Panel';
import Button from '../platform/Button';
import Output from '../platform/Output';
import Message from '../platform/Message';

import _ from '../mocks/i18next';
import { checkPrivilege } from '../mocks/apsc';

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

export default class UserView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginTime: undefined
		};
	}

	async componentDidMount(){
		const { vars: {selectedUser}, user } = this.props.context;

		const response = await fetch(`/aps/2/resources/${selectedUser.aps.id}/loginHistory?sort(-loginTime),limit(${user.aps.id === selectedUser.aps.id ? "1" : "0"},1)`);
		const loginHistoryItems = await response.json();

		const lastLoginHistory = loginHistoryItems.length > 0 ? loginHistoryItems[0] : undefined;

		this.setState({
			loginTime: lastLoginHistory && new Date(lastLoginHistory.loginTime)
		});
	}

	render() {
		const { vars: {selectedUser}, user } = this.props.context;
		const { disabled, locked, invitationDate, telWork, telCell, login, email, notificationEmail, fullName, addressPostal, givenName } = selectedUser;
		const isAdmin = selectedUser.aps.type.includes("http://parallels.com/aps/types/pa/admin-user");
		const isCurrentUser = user.aps.id === selectedUser.aps.id;
		const isEmailHidden = login === email && (!notificationEmail || notificationEmail === email);
		const isNotificationEmailHidden = isAdmin || !notificationEmail || (notificationEmail === email && notificationEmail === login);
		const status = getStatus(selectedUser);
		const hasLoginAsPermission = checkPrivilege(`http://www.parallels.com/pa/pa-core-services#${isAdmin ? "own_users-manage": "mycp_access"}`);
		const hasManagePrivilege = !user.isAccountAdmin || checkPrivilege("http://www.parallels.com/pa/pa-core-services#own_account-manage");
		const loginTime = this.state.loginTime;

		return <div>
			{ (disabled || locked) && <Message bsStyle = "warning">
				{ disabled
					? _("The user has been disabled. He/she is not able to log in to Control Panel or use assigned services.")
					: _("The user has exceeded amount of allowed login attempts and got locked. Click Unlock to enable login back.") }
			</Message> }
			{ status === "invited" &&
				<Message bsStyle = "warning">
				{ calculateDiff(invitationDate) > 48
					? _("The user did not complete the activation. You need to resend an invitation, because the activation link has expired.")
					: _("The user did not yet complete the activation. The activation link emailed to the user, expires in 48 hours. If needed, you can resend an invitation.") }
			</Message> }
			{ hasManagePrivilege
				&& hasLoginAsPermission
				&& !isCurrentUser
				&& ["ready", "updating", "locked", "disabled"].includes(status)
				&& <Button
					bsStyle = "primary"
					label = {_(`Login as ${givenName }`)}
				/>
			}
			{ hasManagePrivilege
				&& !isCurrentUser
				&& ["ready", "updating", "locked", "disabled"].includes(status)
				&& <Button
					bsStyle = "primary"
					label = {_("Reset password")}
				/>
			}
			{ (isCurrentUser && !invitationDate) && <Button
				bsStyle = "primary"
				label = {_("Change Password")}
			/> }
			{ (!isAdmin || !isCurrentUser) && <Button
				bsStyle = "danger"
				label = {_("Delete")}
			/>}
			<Panel
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
				{!isNotificationEmailHidden && <Output label={_("Notification Email")} value={email} />}
			</Panel>
			<Panel
				title = { _("Postal Address") }
			>
				<Output value={`${addressPostal.locality}, ${addressPostal.extendedAddress}`} />
			</Panel>
			<Panel
				title = { _("Login History") }
			>
				<Output
					label={ loginTime && _("Last accessed")}
					value={ loginTime ? loginTime : (isCurrentUser ? _("It’s the first time you logged in.") : _("This user has never logged in.")) }
				/>
			</Panel>
		</div>;
	}
}