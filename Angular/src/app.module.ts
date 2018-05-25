import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlatformModule } from './platform/platform.module';
import { EditView } from './ui/EditView/EditView';
import { EditUserForm } from './ui/components/EditUserForm/EditUserForm';
import { ContextService } from './context.service';

@NgModule({
    imports:      [ BrowserModule, PlatformModule ],
    declarations: [ EditView,
                    EditUserForm],
    bootstrap:    [ EditView ],
    providers:    [ContextService]
})
export class AppModule { }