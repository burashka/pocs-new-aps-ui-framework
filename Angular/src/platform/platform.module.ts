import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Button } from './Button/Button';
import { Panel } from './Panel/Panel';
import { TextBox } from './TextBox/TextBox';
import { CheckBox } from './CheckBox/CheckBox';
import { Output } from './Output/Output';
import { Select } from './Select/Select';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    exports: [ Button,
               Panel,
               TextBox,
               CheckBox,
               Output,
               Select ],
    declarations: [ Button,
                Panel,
                TextBox,
                CheckBox,
                Output,
                Select ]
})
export class PlatformModule {}