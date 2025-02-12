import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'sk-bit';

  onWindowLoad = () => {
    console.log('Window has loaded!');
  };

  ngOnInit(): void {
    window.addEventListener('load', this.onWindowLoad);
  }

  ngOnDestroy(): void {
    window.removeEventListener('load', this.onWindowLoad);
  }

}
