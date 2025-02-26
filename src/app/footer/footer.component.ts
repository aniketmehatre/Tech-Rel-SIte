import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  phoneNumber: string = '800-724-3000'


  makeCall() {
    const phoneNumber = '8007243000'; // Replace this with the actual phone number
    window.location.href = `tel:${phoneNumber}`;
  }
}
