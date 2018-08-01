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
  selector: 'user-message-console-action',
  templateUrl: './user-message.html',
  styleUrls: ['./user-message.scss'],
})

export class UserMessageConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() target: ConsoleTarget = "TEST_CONSOLE";

  public message: string;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.message = this.action.message;
    setTimeout(function(){
      let element = document.getElementById("chat-console-messages");
      element.scrollTop = element.scrollHeight - element.clientHeight;
    },500);
  }

}
