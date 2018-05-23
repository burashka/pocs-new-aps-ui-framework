import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import Platform from './platform/platform.module';
import EditView from './ui/EditView/EditView';
import EditUserForm from './ui/components/EditUserForm/EditUserForm';

@NgModule({
    imports:      [ BrowserModule, Platform ],
    declarations: [ EditView,
                    EditUserForm],
    bootstrap:    [ EditView ]
})
export default class AppModule { }