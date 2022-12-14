import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login-button',
  template: `<button type="button"
    (click)="onClick.emit($event)" 
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./login-button.component.scss'],
})
export default class LoginButtonComponent {
  @Input() primary = false;
  @Input() backgroundColor?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label = 'Button';
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'login-button--primary' : 'login-button--secondary';
    return ['login-button', `login-button--${this.size}`, mode];
  }
}