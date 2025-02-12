import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  isAnswerVisible: boolean[] = [false, false, false, false, false];

  toggleAnswer(index: number) {
    this.isAnswerVisible[index] = !this.isAnswerVisible[index];
  }
}
