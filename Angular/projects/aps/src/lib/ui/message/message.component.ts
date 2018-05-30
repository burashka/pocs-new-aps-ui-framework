import { Input, Component } from '@angular/core';

@Component({
    selector: 'aps-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    @Input() description: string;
}