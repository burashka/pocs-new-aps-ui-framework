import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aps-textbox',
  templateUrl: './textbox.component.html'
})
export class TextboxComponent implements OnInit {
  @Input() value: string;
  @Input() label: string;
  @Input() description: string;
  @Input() placeholder: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onValueChange(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }

}
