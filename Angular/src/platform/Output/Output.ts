import { Input, Component } from '@angular/core';

@Component({
    selector: 'aps-output',
    templateUrl: './Output.template.html'
})
export class Output {
    @Input() label: string;
    @Input() description: string;
}