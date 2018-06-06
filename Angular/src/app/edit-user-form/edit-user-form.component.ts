/* Example of custom component */

import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class EditUserFormComponent {
  private userTypes: Option[] = [
    { label: UserType.User, value: UserType.User },
    { label: UserType.Admin, value: UserType.Admin }
  ];

  @Input() id: string;
  @Input() user: User;
  @Input() needAdd: boolean;
  @Input() needRemove: boolean;

  @Output() onAddUser = new EventEmitter();
  @Output() onRemoveUser = new EventEmitter();

  addUser() {
    this.onAddUser.emit();
  }

  removeUser() {
    this.onRemoveUser.emit();
  }

}
