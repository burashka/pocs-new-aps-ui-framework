import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'aps-button',
    templateUrl: './templates/button.html'
})
export default class Button {
    @Input() iconClass: string;
    @Input() label: string;

    @Output() onClicked = new EventEmitter<boolean>();
    click($event:any) {
        this.onClicked.emit($event);
    }
}