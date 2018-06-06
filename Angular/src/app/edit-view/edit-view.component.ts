/* Example of View with forms */

import { Component } from '@angular/core';
import {ContextService} from '@aps';
import { UsersService } from "../users.service";

@Component({
  selector: 'edit-view',
  templateUrl: './edit-view.component.html'
})
export class EditViewComponent {
  services: string[] = [];
  sendInvitation = false;

  constructor(
      private context: ContextService,
      private users: UsersService
  ) {}

  private servicesUpdate(status: boolean, serviceId: string, i: number){
    if (status) {
      this.services.push(serviceId);
    } else {
      this.services.splice(i, 1);
    }
  }
}
