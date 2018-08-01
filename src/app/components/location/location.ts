import { Component, Input, Output, OnChanges, OnInit, EventEmitter, ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import * as fromRoot from '../../../../reducers';
import * as actions_ from '../../../../actions/actions.actions';
import * as console_ from '../../../../actions/console.actions';

import { ConsoleService } from '../../../../services';
import { ConsoleTarget } from '../../../../models';

@Component({
  selector: 'location-console-action',
  templateUrl: './location.html',
  styleUrls: ['./location.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LocationConsoleActionComponent implements OnInit {
  @Input() action: any;
  @Input() target: ConsoleTarget = "TEST_CONSOLE";
  @Output() onActionDelayed: EventEmitter<boolean> = new EventEmitter<boolean>();

  public message: string;
  public isOver: boolean = false;
  public indexSelectedButton: any;
  private win: any = window;
  public latlng: string;

  constructor(private store: Store<fromRoot.State>, private consoleService: ConsoleService) {}

  ngOnInit() {
    this.store.dispatch(new console_.LoadNextAction({}, this.target));
    setTimeout(function(){
      let element = document.getElementById("chat-console-messages");
      element.scrollTop = element.scrollHeight - element.clientHeight;
    },500);
  }

  getLocation() {
    if(!this.isOver) {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
              position => {
                  this.updatePosition(position),
                  console.log(position)
              },
              error => {
                  switch (error.code) {
                      case 1:
                          console.log('Permission Denied');
                          break;
                      case 2:
                          console.log('Position Unavailable');
                          break;
                      case 3:
                          console.log('Timeout');
                          break;
                  }
              }
          );
      };
    }   
  }

  updatePosition(position) {
    this.latlng = position.coords.latitude + "," + position.coords.longitude;
    let location = {
      "lat": position.coords.latitude,
      "long": position.coords.longitude
    };
    this.isOver = true;
    this.consoleService.updateInterlocutor(location, this.target).take(1).subscribe(() => {
      this.sendReply();
    })

  }

  sendReply() {
    this.win.analytics.track('Send Reply', {'type': 'go_to'});
    this.store.dispatch(new console_.SendReplyAction(this.action.action, this.target));
  };

}
