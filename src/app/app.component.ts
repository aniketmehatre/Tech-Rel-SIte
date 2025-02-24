import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isPopupVisible: boolean = false;
  title = 'TechRel';

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to top
      }
    });
  }


  onWindowLoad = () => {
    console.log('Window has loaded!');
  };

  ngOnInit(): void {
    if (window.performance.navigation.type === 1) {
      this.router.navigate(['/']);
    }
  }

  showPopup() {
    setTimeout(() => {
      this.isPopupVisible = true;
    }, 1000)
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}