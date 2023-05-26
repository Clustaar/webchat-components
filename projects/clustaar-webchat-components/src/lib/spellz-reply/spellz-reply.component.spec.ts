import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpellzReplyComponent } from './spellz-reply.component';

describe('AgentReplyComponent', () => {
  let component: SpellzReplyComponent;
  let fixture: ComponentFixture<SpellzReplyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellzReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellzReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
