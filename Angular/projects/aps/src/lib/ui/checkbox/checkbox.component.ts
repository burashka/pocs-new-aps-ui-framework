import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aps-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements OnInit {
  @Input() checked: boolean;
  @Input() label: string;
  @Input() description: string;
  @Input() hint: string;

  @Output() checkedChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onCheckedChange(value: boolean): void {
    this.checked = value;
    this.checkedChange.emit(value);
  }
}
