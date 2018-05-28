import { Injectable } from '@angular/core';
import {UserType} from "./users/user-type";
import {User} from "./users/user";

const userTemplate = {
    givenName: 	'',
    familyName: '',
    type: 		UserType.User,
    login: 		'',
    notificationEmail: '',
    hasNotificationEmail: false,
    sendInvitation: false
};

@Injectable()
export class UsersService {
    public users: User[] = [{ id: 0, ...userTemplate }];

    private addUser(): void {
        this.users.push({ id: this.users.length, ...userTemplate });
    }
    private removeUser(i: number): void {
        this.users.splice(i, 1);
    }
    private getUsers(): void {
        console.log(this.users);
    }
}