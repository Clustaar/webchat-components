import { Component, forwardRef, Renderer2, ViewChild, Input, Output, OnChanges, EventEmitter, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Actions } from '@ngrx/effects';
import { Action, Chatbot, ConsoleTarget } from '../../../models';

import * as fromRoot from '../../../reducers';

@Component({
  selector: 'switch-console-actions',
  templateUrl: './switch.html',
  styleUrls: ['./switch.scss'],
})

export class SwitchConsoleActionsComponent implements OnInit {
  @Input() actions: any[] = [];
  @Input() action: any;
  @Input() index: number;
  @Input() target: ConsoleTarget = "TEST_CONSOLE";

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    console.log(this.action);
  }

}
