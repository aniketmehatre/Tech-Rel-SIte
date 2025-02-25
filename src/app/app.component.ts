import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isTopbarHidden: boolean = false;
  lastScrollTop: number = 0;
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


  @HostListener('window:scroll', [])
  onWindowScroll() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // Scrolling Down - Hide Top Bar
      this.isTopbarHidden = true;
    } else {
      // Scrolling Up - Show Top Bar
      this.isTopbarHidden = false;
    }

    this.lastScrollTop = scrollTop;
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