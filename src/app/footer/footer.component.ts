import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
   greeting: string = '';

  @Output() greetingSent = new EventEmitter<string>();

  sendGreeting() {
    this.greetingSent.emit(this.greeting);
  }

}
