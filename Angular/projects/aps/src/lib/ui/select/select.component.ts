import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from './option';

@Component({
  selector: 'aps-select',
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {
  @Input() value: string;
  @Input() label: string;
  @Input() description: string;
  @Input() options: Array<Option>;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onValueChange(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }

}
