import {ModuleWithProviders, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContextService } from './context.service';
import { ApscService } from "./apsc.service";

import { PanelComponent } from './ui/panel/panel.component';
import { CheckboxComponent } from './ui/checkbox/checkbox.component';
import { ButtonComponent } from './ui/button/button.component';
import { SelectComponent } from './ui/select/select.component';
import { TextboxComponent } from './ui/textbox/textbox.component';
import { MessageComponent } from "./ui/message/message.component";
import { OutputComponent } from "./ui/output/output.component";

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [
    PanelComponent,
    CheckboxComponent,
    ButtonComponent,
    SelectComponent,
    TextboxComponent,
    MessageComponent,
    OutputComponent
  ],
  exports: [
    FormsModule,
    PanelComponent,
    CheckboxComponent,
    ButtonComponent,
    SelectComponent,
    TextboxComponent,
    MessageComponent,
    OutputComponent
  ],
  providers: [
    ContextService,
    ApscService
  ]
})
export class ApsModule {
  forRoot(): ModuleWithProviders {
    return {
      ngModule: ApsModule,
      providers: [
        ContextService
      ]
    };
  }
}
