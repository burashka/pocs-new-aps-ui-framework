import { Input, Component } from '@angular/core';

@Component({
    selector: 'aps-output',
    templateUrl: './output.component.html'
})
export class OutputComponent {
    @Input() label: string;
    @Input() description: string;
    @Input() value: string;
}