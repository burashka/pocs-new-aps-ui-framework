import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'aps-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() iconClass: string;
  @Input() label: string;

  @Output() onClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  onClick() {
    this.onClicked.emit();
  }

}
