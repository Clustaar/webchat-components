import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'obfuscation'
})
export class ObfuscationPipe implements PipeTransform {

  REGEX = /[(\*\*)](.*)[(/\*\*)]/;

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(html: string) {
    html = html.replace(this.REGEX, (value) => {
      const rules = value.replace(/\*\*/g, '').split('basic_obfuscation_of_');
      if (rules.length > 1) {
        switch (rules[1]) {
          case 'email_address':
            return this.buildObfuscatedSpan('Email', 'icon-other-call.svg')
          case 'phone_number':
            return this.buildObfuscatedSpan('Phone number', 'icon-other-phone-number.svg')
          case 'credit_card_number':
            return this.buildObfuscatedSpan('Credit Card', 'icon-other-cb-card.svg')
          case 'social_security_number':
            return this.buildObfuscatedSpan('FR SSN', 'icon-other-social-card.svg')
          default:
            return value;
        }
      }
      const customRules = value.replace(/\*\*/g, '').split('custom_obfuscation_of_');
      if (customRules.length > 1) {
        return this.buildObfuscatedSpan(customRules[1], 'icon-other-rule.svg')
      }
      return value;
    })

    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

  private buildObfuscatedSpan(label: string, icon: string) {
    return `<span style="font-style: italic; font-weight: bold;"><img style="height: 15px;padding-left: 2px;padding-right: 2px;" src="/assets/icon/${icon}">${label}</span>`;
  }
}
