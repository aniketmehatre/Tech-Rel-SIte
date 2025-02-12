import { Component } from '@angular/core';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {

  clientCount: number = 0;
  projectCount: number = 0;
  hourCount: number = 0;
  workerCount: number = 0;

  clientCountstop: any = setInterval(() => {
    this.clientCount++;

    if (this.clientCount == 81) {
      clearInterval(this.clientCountstop);
    }
  }, 100);


  projectCountstop: any = setInterval(() => {
    this.projectCount++;

    if (this.projectCount == 50) {
      clearInterval(this.projectCountstop);
    }
  }, 100);

  hourCountstop: any = setInterval(() => {
    this.hourCount++;

    if (this.hourCount == 1212) {
      clearInterval(this.hourCountstop);
    }
  }, 5);

  workerCountstop: any = setInterval(() => {
    this.workerCount++;

    if (this.workerCount == 41) {
      clearInterval(this.workerCountstop);
    }
  }, 100);
}

