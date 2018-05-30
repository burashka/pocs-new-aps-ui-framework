import { Component } from '@angular/core';
import {ContextService, I18nService} from '@aps';
import { UsersService } from "../users.service";

@Component({
  selector: 'edit-view',
  templateUrl: './edit-view.component.html'
})
export class EditViewComponent {
  services: string[] = [];
  sendInvitation = false;

  private _: (text: string) => string;

  constructor(
      private context: ContextService,
      private users: UsersService,
      private i18n: I18nService
  ) {
      this._ = i18n._;
  }

  private servicesUpdate(status: boolean, serviceId: string, i: number){
    console.log(status, serviceId, this.services.includes(serviceId));
    if (status) {
      this.services.push(serviceId);
    } else {
      this.services.splice(i, 1);
    }
  }
}
