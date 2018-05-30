import { Component, OnInit } from '@angular/core';
import { ContextService, ApscService, I18nService } from '@aps';
import {UsersService} from "../users.service";

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

@Component({
    selector: 'user-view',
    templateUrl: './user-view.component.html'
})
export class UserViewComponent implements OnInit {
    private _: (text: string) => string;
    private hasLoginAsPermission: boolean;
    private hasManagePrivilege: boolean;
    private status: string;
    private isNotificationEmailHidden: boolean;
    private isEmailHidden: boolean;
    private isCurrentUser: boolean;
    private isAdmin: boolean;
    private loginTime: Date;

    constructor(
        private context: ContextService,
        private apsc: ApscService,
        private i18n: I18nService,
        private users: UsersService
    ) {
        this._ = i18n._;
    }

    ngOnInit(){
        const { vars: {selectedUser}, user } = this.context;
        const { login, email, notificationEmail } = selectedUser;

        this.users.getLoginHistory(selectedUser, user).subscribe((loginTime: undefined | Date) => {
            this.loginTime = loginTime;
        });

        this.isAdmin = selectedUser.aps.type.includes("http://parallels.com/aps/types/pa/admin-user");
        this.isCurrentUser = user.aps.id === selectedUser.aps.id;
        this.isEmailHidden = login === email && (!notificationEmail || notificationEmail === email);
        this.isNotificationEmailHidden = this.isAdmin || !notificationEmail || (notificationEmail === email && notificationEmail === login);
        this.status = getStatus(selectedUser);
        this.hasLoginAsPermission = this.apsc.checkPrivilege(`http://www.parallels.com/pa/pa-core-services#${this.isAdmin ? "own_users-manage": "mycp_access"}`);
        this.hasManagePrivilege = !user.isAccountAdmin || this.apsc.checkPrivilege("http://www.parallels.com/pa/pa-core-services#own_account-manage");
    }
}
