import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../users/user';
import { UserType } from '../users/user-type';

interface Option {
  label: UserType;
  value: UserType;
}

@Component({
  selector: 'poc-edit-user-form',
  templateUrl: './edit-user-form.component.html'
})
export class EditUserFormComponent implements OnInit {
  private userTypes: Option[] = [
    { label: UserType.User, value: UserType.User },
    { label: UserType.Admin, value: UserType.Admin }
  ];
  title = 'Specify New User';
  firstNameLabel = 'First Name';
  firstNamePlaceholder = 'e.g.: John';
  lastNameLabel = 'Last Name';
  lastNamePlaceholder = 'e.g.: Smith';
  roleNameLabel = 'Role Name';
  addUserText = 'On More User';
  removeUserText = 'Remove User';
  emailNameText = 'Email Name';
  emailToSignInText = 'Email (To Sign In)';
  emailPlaceholder = 'e.g.: john@mycompany.com';
  emailNameDescription = 'This email address will be used to sign in and receive notifications.';
  emailToSignInDescription = `You'll use it to sign in.`;
  notificationEmailText = 'Notification Email';
  notificationEmailDescription = `We'll use this email for account and system updates.`;
  diffrentEmailText = 'Use different emails to sign in and receive notifications.';

  @Input() id: string;
  @Input() user: User;
  @Input() needAdd: boolean;
  @Input() needRemove: boolean;

  @Output() onAddUser = new EventEmitter();
  @Output() onRemoveUser = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addUser() {
    this.onAddUser.emit();
  }

  removeUser() {
    this.onRemoveUser.emit();
  }

}
