import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentReplyComponent } from './agent-reply.component';

describe('AgentReplyComponent', () => {
  let component: AgentReplyComponent;
  let fixture: ComponentFixture<AgentReplyComponent>;

  beforeEach(async(() => {
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
