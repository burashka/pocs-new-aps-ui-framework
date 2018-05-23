import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'aps-textbox',
    templateUrl: './templates/textbox.html'
})
export default class TextBox {
    @Input() value: string;
    @Input() label: string;
    @Input() description: string;
    @Input() placeholder: string;

    @Output() valueChange = new EventEmitter<string>();
    onValueChange(value: string){
        this.value = value;
        this.valueChange.emit(value);
    }
}