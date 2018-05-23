import { Input, Component } from '@angular/core';

@Component({
    selector: 'aps-output',
    templateUrl: './templates/output.html'
})
export default class Output {
    @Input() label: string;
    @Input() description: string;
}