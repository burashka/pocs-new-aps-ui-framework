import {ModuleWithProviders, NgModule} from '@angular/core';
import { ContextService } from './context.service';
import { PanelComponent } from './ui/panel/panel.component';
import { CheckboxComponent } from './ui/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ui/button/button.component';
import { SelectComponent } from './ui/select/select.component';
import { TextboxComponent } from './ui/textbox/textbox.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [
    PanelComponent,
    CheckboxComponent,
    ButtonComponent,
    SelectComponent,
    TextboxComponent
  ],
  exports: [
    FormsModule,
    PanelComponent,
    CheckboxComponent,
    ButtonComponent,
    SelectComponent,
    TextboxComponent
  ],
  providers: [
    ContextService
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
