import { ObfuscationPipe } from './obfuscation.pipe';
import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

describe('ObfuscationPipe', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule
      ],
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            sanitize: (ctx: any, val: string) => val,
            bypassSecurityTrustHtml: (val: string) => val,
          },
        }
      ]
    }).compileComponents();
  });

  it('should transform obfuscation rules', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    let pipe = new ObfuscationPipe(domSanitizer);
    expect(pipe.transform('Hello')).toBe('Hello')

    expect(pipe.transform('This is my **basic_obfuscation_of_email_address**'))
      .toBe('This is my <span style="font-style: italic; font-weight: bold;"><img style="height: 15px;padding-left: 2px;padding-right: 2px;" src="/assets/icon/icon-other-call.svg">Email</span>');

    expect(pipe.transform('This is my **basic_obfuscation_of_phone_number**'))
      .toBe(   'This is my <span style="font-style: italic; font-weight: bold;"><img style="height: 15px;padding-left: 2px;padding-right: 2px;" src="/assets/icon/icon-other-phone-number.svg">Phone number</span>');

    expect(pipe.transform('This is my **basic_obfuscation_of_credit_card_number**'))
      .toBe(   'This is my <span style="font-style: italic; font-weight: bold;"><img style="height: 15px;padding-left: 2px;padding-right: 2px;" src="/assets/icon/icon-other-cb-card.svg">Credit Card</span>');

    expect(pipe.transform('This is my **basic_obfuscation_of_social_security_number**'))
      .toBe(   'This is my <span style="font-style: italic; font-weight: bold;"><img style="height: 15px;padding-left: 2px;padding-right: 2px;" src="/assets/icon/icon-other-social-card.svg">FR SSN</span>');

    expect(pipe.transform('This is my **custom_obfuscation_of_toto**'))
      .toBe(   'This is my <span style="font-style: italic; font-weight: bold;"><img style="height: 15px;padding-left: 2px;padding-right: 2px;" src="/assets/icon/icon-other-rule.svg">toto</span>');

  }));
});
