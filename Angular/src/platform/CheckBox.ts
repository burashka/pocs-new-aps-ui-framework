import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'aps-checkbox',
    templateUrl: './templates/checkbox.html'
})
export default class CheckBox {
    @Input() checked: boolean;
    @Input() label: string;
    @Input() description: string;
    @Input() hint: string;

    @Output() checkedChange = new EventEmitter<boolean>();
    onCheckedChange(value: boolean){
        this.checked = value;
        this.checkedChange.emit(value);
    }
}