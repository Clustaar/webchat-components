import { Component, Input, Output, OnChanges, OnInit, EventEmitter, ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import * as fromRoot from '../../../../reducers';
import * as actions_ from '../../../../actions/actions.actions';
import * as console_ from '../../../../actions/console.actions';
import { ConsoleTarget } from '../../../../models';

@Component({
  selector: 'quickreply-console-action',
  templateUrl: './quickreply.html',
  styleUrls: ['./quickreply.scss'],
  encapsulation: ViewEncapsulation.None
})

export class QuickreplyConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() target: ConsoleTarget = "TEST_CONSOLE";

  @Output() onActionDelayed: EventEmitter<boolean> = new EventEmitter<boolean>();

  public message: string;
  public isOver: boolean = false;
  public indexSelectedButton: any;
  private win: any = window;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(new console_.LoadNextAction({}, this.target));
    setTimeout(function(){
      let element = document.getElementById("chat-console-messages");
      element.scrollTop = element.scrollHeight - element.clientHeight;
    },500);
  }

  sendReply(indexSelectedButton, button) {
    if(!this.isOver) {
      this.win.analytics.track('Send Reply', {'type': 'go_to'});
      this.store.dispatch(new console_.SendReplyAction(button.action, this.target));
      this.isOver = true;
      this.indexSelectedButton = indexSelectedButton;
    }
    
  };

}
