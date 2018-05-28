import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EditViewComponent } from './edit-view/edit-view.component';
import { ApsModule } from '@aps';
import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    EditViewComponent,
    EditUserFormComponent
  ],
  imports: [
    BrowserModule,
    ApsModule
  ],
  providers: [UsersService],
  bootstrap: [EditViewComponent]
})
export class AppModule { }
