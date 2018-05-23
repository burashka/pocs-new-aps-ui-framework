import { Input, Component, Output, EventEmitter } from '@angular/core';

enum UserType { User='User', Admin='Admin' }

interface User {
    id:                     number;
    givenName:              string;
    familyName:             string;
    type: 		            UserType;
    login: 		            string;
    notificationEmail:      string;
    hasNotificationEmail:   boolean;
    sendInvitation:         boolean;
}

interface Option {
    label: UserType,
    value: UserType
}

@Component({
    selector: 'poc-editUserForm',
    templateUrl: './EditUserForm.template.html'
})
export default class EditUserForm {
    @Input() id: string;
    @Input() user: User;
    @Input() needAdd: boolean;
    @Input() needRemove: boolean;

    @Output() onAddUser = new EventEmitter();
    addUser() {
        this.onAddUser.emit();
    }
    @Output() onRemoveUser = new EventEmitter();
    removeUser() {
        this.onRemoveUser.emit();
    }

    private userTypes: Option[] = [
        { label: UserType.User, value: UserType.User },
        { label: UserType.Admin, value: UserType.Admin }
    ];
    private title: string = "Specify New User";
    private firstNameLabel: string = "First Name";
    private firstNamePlaceholder: string = "e.g.: John";
    private lastNameLabel: string = "Last Name";
    private lastNamePlaceholder: string = "e.g.: Smith";
    private roleNameLabel: string = "Role Name";
    private addUserText: string = "On More User";
    private removeUserText: string = "Remove User";
    private emailNameText: string = "Email Name";
    private emailToSignInText: string = "Email (To Sign In)";
    private emailPlaceholder: string = "e.g.: john@mycompany.com";
    private emailNameDescription: string = "This email address will be used to sign in and receive notifications.";
    private emailToSignInDescription: string = "You'll use it to sign in.";
    private notificationEmailText: string = "Notification Email";
    private notificationEmailDescription: string = "We'll use this email for account and system updates.";
    private diffrentEmailText: string = "Use different emails to sign in and receive notifications.";
}