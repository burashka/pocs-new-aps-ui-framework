import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';

import { EditViewComponent } from './edit-view/edit-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AppComponent } from './app.component';
import { ApsModule } from '@aps';
import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';
import { UsersService } from './users.service';

const appRoutes: Routes = [
    { path: '', component: UserViewComponent },
    { path: 'edit', component: EditViewComponent }
];

@NgModule({
  declarations: [
      EditViewComponent,
      EditUserFormComponent,
      UserViewComponent,
      AppComponent
  ],
  imports: [
      BrowserModule,
      ApsModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      TranslateModule.forRoot()
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
