import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SendJsEventComponent } from './send-js-event.component';

describe('SendJsEventComponent', () => {
  let component: SendJsEventComponent;
  let fixture: ComponentFixture<SendJsEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SendJsEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendJsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
