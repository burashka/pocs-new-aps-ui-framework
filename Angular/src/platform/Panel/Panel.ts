import { Input, Component } from '@angular/core';

@Component({
    selector: 'aps-panel',
    templateUrl: './Panel.template.html'
})
export default class Panel {
    @Input() title: string;
}