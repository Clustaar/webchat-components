import { Component, forwardRef, Renderer2, ViewChild, Input, Output, OnChanges, EventEmitter, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'switch-console-actions',
  templateUrl: './switch.html',
  styleUrls: ['./switch.scss'],
})

export class SwitchConsoleActionsComponent implements OnInit {
  @Input() actions: any[] = [];
  @Input() action: any;
  @Input() index: number;

  constructor() {}

  ngOnInit() {
    console.log(this.action);
  }

}
