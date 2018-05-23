import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import EditViewComponent   from './EditView.component';
import EditUserForm from '../components/EditUserForm';
import Button from '../../platform/Button';
import Panel from '../../platform/Panel';
import TextBox from '../../platform/TextBox';
import CheckBox from '../../platform/CheckBox';
import Output from '../../platform/Output';
import Select from '../../platform/Select';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ EditViewComponent,
                    EditUserForm,
                    Button,
                    Panel,
                    TextBox,
                    CheckBox,
                    Output,
                    Select ],
    bootstrap:    [ EditViewComponent ]
})
export class EditViewModule {}