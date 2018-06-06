import { Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'poc-root',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}