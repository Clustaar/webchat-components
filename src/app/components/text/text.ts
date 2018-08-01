import { Component, Input, Output, OnChanges, OnInit, EventEmitter, ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ConsoleTarget } from '../../../../models';

import * as fromRoot from '../../../../reducers';
import * as actions_ from '../../../../actions/actions.actions';
import * as console_ from '../../../../actions/console.actions';

@Component({
  selector: 'text-console-action',
  templateUrl: './text.html',
  styleUrls: ['./text.scss'],
})

export class TextConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() target: ConsoleTarget = "TEST_CONSOLE";

  public message: string;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.message = this.randomAlternative();
    this.store.dispatch(new console_.LoadNextAction({}, this.target));
    setTimeout(function(){
      let element = document.getElementById("chat-console-messages");
      element.scrollTop = element.scrollHeight - element.clientHeight;
    },500);
  }

  private randomAlternative() {
    let rand = 0;

    if (this.action.alternatives.length > 1) {
      rand = Math.floor(Math.random() * this.action.alternatives.length);
    }

    return this.action.alternatives[rand];
  }
}
