import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aps-panel',
  templateUrl: './panel.component.html'
})
export class PanelComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
