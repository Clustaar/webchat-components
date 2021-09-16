import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ObfuscationIcons } from './obfuscation-icons';

@Pipe({
  name: 'obfuscation'
})
export class ObfuscationPipe implements PipeTransform {

  REGEX = /[(\*\*)](.*)[(/\*\*)]/;

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(html: string, textColor: string) {
    html = html.replace(this.REGEX, (value) => {
      const rules = value.replace(/\*\*/g, '').split('basic_obfuscation_of_');
      if (rules.length > 1) {
        switch (rules[1]) {
          case 'email_address':
            return this.buildObfuscatedIconSpan('Email', ObfuscationIcons.EMAIL, textColor)
          case 'phone_number':
            return this.buildObfuscatedIconSpan('Phone number', ObfuscationIcons.PHONE, textColor)
          case 'credit_card_number':
            return this.buildObfuscatedIconSpan('Credit Card', ObfuscationIcons.CB_CARD, textColor)
          case 'social_security_number':
            return this.buildObfuscatedIconSpan('FR SSN', ObfuscationIcons.SOCIAL, textColor)
          default:
            return value;
        }
      }
      const customRules = value.replace(/\*\*/g, '').split('custom_obfuscation_of_');
      if (customRules.length > 1) {
        return this.buildObfuscatedIconSpan(customRules[1], ObfuscationIcons.CUSTOM, textColor)
      }
      return value;
    })

    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

  private buildObfuscatedIconSpan(label: string, iconSvg: string, textColor: string) {
    return `<span style="font-style: italic; font-weight: bold;">${iconSvg.replace("#FFFFFF", textColor)}${label}</span>`;
  }
}
