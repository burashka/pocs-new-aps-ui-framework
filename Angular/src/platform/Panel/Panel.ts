import { Input, Component } from '@angular/core';

@Component({
    selector: 'aps-panel',
    templateUrl: './Panel.template.html'
})
export class Panel {
    @Input() title: string;
}