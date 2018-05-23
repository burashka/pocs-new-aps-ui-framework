import { Input, Component } from '@angular/core';

@Component({
    selector: 'aps-panel',
    templateUrl: './templates/panel.html'
})
export default class Panel {
    @Input() title: string;
}