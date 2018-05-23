import { Component } from '@angular/core';

interface View {
    id: 'vps',
    label: 'Add VPS'
}

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

const userTemplate = {
    givenName: 	"",
    familyName: "",
    type: 		UserType.User,
    login: 		"",
    notificationEmail: "",
    hasNotificationEmail: false,
    sendInvitation: false
};

@Component({
    selector: 'my-app',
    templateUrl: './EditView.template.html'
})
export default class EditViewComponent {
    users: User[] = [{ id: 0, ...userTemplate }];
    services: string[] = [];
    sendInvitation: boolean = false;
    wizardState: View[] = [{
        id: "vps",
        label: "Add VPS"
    }];

    private selectOptionsText: string = "Select Options";
    private sendActivationEmailDesc: string = "Send activation email to users";
    private sendActivationEmailHint: string = "Users will be given an activation link to log in to the Control Panel and enable services assigned.";

    private servicesUpdate(status: boolean, serviceId: string, i: number){
        console.log(status, serviceId, this.services.includes(serviceId));
        if (status) {
            this.services.push(serviceId);
        } else {
            this.services.splice(i, 1);
        }
    }
    private addUser(user: User): void {
        this.users.push({ id: this.users.length, ...userTemplate });
    }
    private removeUser(i: number): void {
        this.users.splice(i, 1);
    }
    private getUsers(): void {
        console.log(this.users);
    }
}