import { Input, Component, Output, EventEmitter } from '@angular/core';

interface Option {
    id:     number;
    label:  string;
    value:  string;
}

@Component({
    selector: 'aps-select',
    templateUrl: './Select.template.html'
})
export default class TextBox {
    @Input() value: string;
    @Input() label: string;
    @Input() description: string;
    @Input() options: Array<Option>;

    @Output() valueChange = new EventEmitter<string>();
    onValueChange(value: string){
        this.value = value;
        this.valueChange.emit(value);
    }
}