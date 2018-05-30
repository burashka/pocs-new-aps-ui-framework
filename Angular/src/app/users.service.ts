import { Injectable } from '@angular/core';
import { UserType } from "./users/user-type";
import { User } from "./users/user";
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";

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

    constructor(private http: HttpClient){ }

    public addUser(): void {
        this.users.push({ id: this.users.length, ...userTemplate });
    }
    public removeUser(i: number): void {
        this.users.splice(i, 1);
    }
    public getUsers(): void {
        console.log(this.users);
    }
    public getLoginHistory(selectedUser, user){
        return this.http.get(`http://localhost:3000/aps/2/resources/${selectedUser.aps.id}/loginHistory?sort(-loginTime),limit(${user.aps.id === selectedUser.aps.id ? "1" : "0"},1)`)
            .pipe(map((loginHistoryItems: any[]) => {
                const lastLoginHistory = loginHistoryItems.length > 0 ? loginHistoryItems[0] : undefined;

                return lastLoginHistory && new Date(lastLoginHistory.loginTime);
            }));
    }
}