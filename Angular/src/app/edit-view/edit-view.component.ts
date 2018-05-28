import { Component } from '@angular/core';
import { ContextService } from '@aps';
import { UsersService } from "../users.service";

@Component({
  selector: 'poc-root',
  templateUrl: './edit-view.component.html'
})
export class EditViewComponent {
  private selectOptionsText = 'Select Options';
  private sendActivationEmailDesc = 'Send activation email to users';
  private sendActivationEmailHint = 'Users will be given an activation link to log in to the Control Panel and enable services assigned.';
  private servicesText = 'Test';
  services: string[] = [];
  sendInvitation = false;
  wizardState = [{
    id: 'vps',
    label: 'Add VPS'
  }];

  constructor(private context: ContextService, private users: UsersService) {}
  private servicesUpdate(status: boolean, serviceId: string, i: number){
    console.log(status, serviceId, this.services.includes(serviceId));
    if (status) {
      this.services.push(serviceId);
    } else {
      this.services.splice(i, 1);
    }
  }
}
