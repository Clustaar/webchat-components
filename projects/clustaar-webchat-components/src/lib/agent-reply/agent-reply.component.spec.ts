import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgentReplyComponent } from './agent-reply.component';

describe('AgentReplyComponent', () => {
  let component: AgentReplyComponent;
  let fixture: ComponentFixture<AgentReplyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
