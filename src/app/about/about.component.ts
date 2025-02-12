import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  trainedCount: number = 10000;
  clientCount: number = 0;
  placedcount: number = 0;
  learningcount: number = 0;
  clientCountstop: any;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.clientCountstop = setInterval(() => {
      this.trainedCount++;

      if (this.trainedCount === 20000) {
        clearInterval(this.clientCountstop);
      }

      this.cdr.detectChanges();
    }, 0.5);
  }

  projectCountstop: any = setInterval(() => {
    this.clientCount++;

    if (this.clientCount == 600) {
      clearInterval(this.projectCountstop);
    }
  }, 100);

  placedcountstop: any = setInterval(() => {
    this.placedcount++;

    if (this.placedcount == 6000) {
      clearInterval(this.placedcountstop);
    }
  }, 10)

  learningcountstop: any = setInterval(() => {
    this.learningcount++;

    if (this.learningcount == 30000) {
      clearInterval(this.learningcountstop);
    }
  })
}
