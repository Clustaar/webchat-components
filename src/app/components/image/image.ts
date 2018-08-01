import { Component, forwardRef, Renderer2, ViewChild, Input, Output, OnChanges, OnDestroy, OnInit, EventEmitter,
  ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Actions } from '@ngrx/effects';

import * as fromRoot from '../../../../reducers';
import * as console_ from '../../../../actions/console.actions';
import { ConsoleTarget }  from '../../../../models';


@Component({
  selector: 'image-console-action',
  templateUrl: './image.html',
  styleUrls: ['./image.scss'],
})

export class ImageConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() target: ConsoleTarget = "TEST_CONSOLE";

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(new console_.LoadNextAction({}, this.target));
    setTimeout(function(){
      let element = document.getElementById("chat-console-messages");
      element.scrollTop = element.scrollHeight - element.clientHeight;
    },500);
    
  }

}
