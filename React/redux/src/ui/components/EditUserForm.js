import React from 'react';

import update from 'immutability-helper';

import _ from "../../mocks/i18next";

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
			onChange={(e) => {
				onUserChange(update(user, { givenName: { $set: e.target.value } }));
			}}
		/>
		<TextBox
			label={_("Last Name")}
			placeholder={_("e.g.: Smith")}
			value={user.familyName}
			onChange={(e) => {
				onUserChange(update(user, { familyName: { $set: e.target.value } }));
			}}
		/>
		<Select
			label={_("Role Name")}
			options={[
				{label: "User", value: "User"},
				{label: "Admin", value: "Admin"}
			]}
			value={user.type}
			onChange={(e) => {
				onUserChange(update(user, { type: { $set: e.target.value } }));
			}}
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
			onChange={(e) => {
				onUserChange(update(user, { login: { $set: e.target.value } }));
			}}
		/>
		{hasNotificationEmail && <TextBox
			description={_("We'll use this email for account and system updates.")}
			label={_("Notification Email")}
			placeholder={_("e.g.: john@mycompany.com")}
			value={user.notificationEmail}
			onChange={(e) => {
				onUserChange(update(user, { notificationEmail: { $set: e.target.value } }));
			}}
		/>}
		<CheckBox
			description={_("Use different emails to sign in and receive notifications.")}
			checked={user.hasNotificationEmail}
			onChange={(e) => {
				onUserChange(update(user, { hasNotificationEmail: { $set: e.target.checked } }));
			}}
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

export default EditUserForm;