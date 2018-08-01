import { Component, forwardRef, Renderer2, ViewChild, Input, Output, OnChanges, EventEmitter,
  ComponentFactoryResolver, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Actions } from '@ngrx/effects';

import { Step, Action, ConsoleTarget } from '../../../../models';

import * as fromRoot from '../../../../reducers';
import * as actions_ from '../../../../actions/actions.actions';
import * as console_ from '../../../../actions/console.actions';

@Component({
  selector: 'wait-console-action',
  templateUrl: './wait.html',
  styleUrls: ['./wait.scss'],
})

export class WaitConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() target: ConsoleTarget = "TEST_CONSOLE";
  @Output() onActionDelayed: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isOver: boolean = false;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    const self = this;
    let timeoutDelay = this.action.duration * 1000;

    setTimeout(function(me) {
      //self.onActionDelayed.emit(true);
      me.store.dispatch(new console_.LoadNextAction({}, me.target));
      me.isOver = true;
    }, timeoutDelay,this);
  }
}
