import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'location-console-action',
  templateUrl: './location.html',
  styleUrls: ['./location.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LocationConsoleActionComponent implements OnInit, AfterViewChecked {
  @Input() action: any;
  @Input() inverted: boolean = false;
  @Input() primaryColor: string = '#30B286';
  @Input() textColor: string = '#FFFFFF';
  @Input() autoScroll? = true;
  @Output() onSendReply = new EventEmitter<any>();
  @Output() onLoadNextAction = new EventEmitter<boolean>();
  @Output() onLastActionRendered: EventEmitter<boolean> = new EventEmitter<boolean>();

  public message: string;
  public isOver: boolean = false;
  public indexSelectedButton: any;
  public latlng: string;

  private win: any = window;
  private initialActionRendered = false;

  constructor() { }

  ngOnInit() {
    this.onLoadNextAction.emit(true);
    //this.store.dispatch(new console_.LoadNextAction({}, this.target));

    if (this.autoScroll) {
      setTimeout(function () {
        let element = document.getElementById('chat-console-messages');

        element.scrollTop = element.scrollHeight - element.clientHeight;
      }, 500);
    }
  }

  ngAfterViewChecked() {
    // Use a flag to detect view rendered in DOM only once, because `AfterViewInit` is sometimes
    // called before view is rendered
    if (!this.initialActionRendered) {
      this.initialActionRendered = true;

      this.onLastActionRendered.emit(true);
    }
  }

  getLocation() {
    if (!this.isOver) {
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
      }
    }
  }

  updatePosition(position) {
    this.latlng = position.coords.latitude + ',' + position.coords.longitude;
    let location = {
      'lat': position.coords.latitude,
      'long': position.coords.longitude
    };
    this.isOver = true;
    /*this.consoleService.updateInterlocutor(location, this.target).take(1).subscribe(() => {
      this.sendReply();
    })*/

  }

  sendReply() {
    //this.win.analytics.track('Send Reply', {'type': 'go_to'});
    //this.store.dispatch(new console_.SendReplyAction(this.action.action, this.target));
    this.onSendReply.emit(this.action.action);
  };

}
