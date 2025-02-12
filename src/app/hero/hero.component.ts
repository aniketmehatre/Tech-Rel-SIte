import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Aos from 'aos';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.3s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeroComponent implements OnInit {
mail() {
throw new Error('Method not implemented.');
}
whatAppChat() {
throw new Error('Method not implemented.');
}
instagram() {
throw new Error('Method not implemented.');
}
facebook() {
throw new Error('Method not implemented.');
}

  slides: any = [];
  currentIndex = 0
  constructor() { }
  ngOnInit(): void {
    Aos.init();
    this.startAutoplay();
    for (let i = 1; i <= 7; i++) {
      let obj = {
        imageUrl: `../../assets/homeImg/banner/gallery_${i}.jpeg`
      }
      this.slides.push(obj)
    }
  }

  startAutoplay() {
    setInterval(() => {
      this.showNextSlide();
      console.log('hiii');

    }, 4000); // Adjust interval as needed
  }

  showNextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  showPopup() {
    this.showPopup, this.startAutoplay();
  }

}
