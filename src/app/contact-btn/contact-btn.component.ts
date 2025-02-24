import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-btn',
  templateUrl: './contact-btn.component.html',
  styleUrls: ['./contact-btn.component.css']
})
export class ContactBtnComponent {
  whatsAppOpen() {
    window.open('https://wa.me/message/D4ULEOA5NGXZL1', '')
  }
}
