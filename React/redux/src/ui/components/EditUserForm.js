/* Example of custom component */

import React from 'react';
import { shape, string, number, bool, oneOf, func } from 'prop-types';

import _ from "../../platform/mocks/i18next";

import Panel from '../../platform/Panel';
import TextBox from '../../platform/TextBox';
import CheckBox from '../../platform/CheckBox';
import Select from '../../platform/Select';
import Button from '../../platform/Button';

const EditUserForm = ({ user, needRemove, needAdd, onRemoveUser, onAddUser, onUserChange }) => {
	const hasNotificationEmail = user.hasNotificationEmail;

	return <Panel
		key={user.id}
		id={user.id}
		title={_("Specify New User")}
	>
		<TextBox
			label={_("First Name")}
			placeholder={_("e.g.: John")}
			value={user.givenName}
			onChange={e => onUserChange({ ...user, givenName: e.target.value })}
		/>
		<TextBox
			label={_("Last Name")}
			placeholder={_("e.g.: Smith")}
			value={user.familyName}
			onChange={e => onUserChange({ ...user, familyName: e.target.value })}
		/>
		<Select
			label={_("Role Name")}
			options={[
				{label: "User", value: "User"},
				{label: "Admin", value: "Admin"}
			]}
			value={user.type}
			onChange={e => onUserChange({ ...user, type: e.target.value })}
		/>
		<TextBox
			label={hasNotificationEmail ? _("Email Name") : _("Email (To Sign In)")}
			placeholder={_("e.g.: john@mycompany.com")}
			description={
				hasNotificationEmail
					? _("This email address will be used to sign in and receive notifications.")
					: _("You'll use it to sign in.")
			}
			value={user.login}
			onChange={e => onUserChange({ ...user, login: e.target.value })}
		/>
		{hasNotificationEmail && <TextBox
			description={_("We'll use this email for account and system updates.")}
			placeholder={_("e.g.: john@mycompany.com")}
			label={_("Notification Email")}
			value={user.notificationEmail}
			onChange={e => onUserChange({ ... user, notificationEmail: e.target.value })}
		/>}
		<CheckBox
			description={_("Use different emails to sign in and receive notifications.")}
			checked={hasNotificationEmail}
			onChange={e => onUserChange({ ...user, hasNotificationEmail: e.target.checked })}
		/>
		{needAdd && <Button
			bsStyle="primary"
			label={_("On More User")}
			onClick={onAddUser}
		/>}
		{needRemove && <Button
			label={_("Remove User")}
			onClick={onRemoveUser}
		/>}
	</Panel>;
};

EditUserForm.propTypes = {
	user: shape({
		id: number,
		givenName: 	string,
		familyName: string,
		type: 		oneOf(["User", "Admin"]),
		login: 		string,
		notificationEmail: string,
		hasNotificationEmail: bool,
		sendInvitation: bool
	}).isRequired,
	needRemove: bool,
	needAdd: bool,
	onRemoveUser: func,
	onAddUser: func,
	onUserChange: func.isRequired
};

export default EditUserForm;