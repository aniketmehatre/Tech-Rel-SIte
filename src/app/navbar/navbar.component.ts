import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
declare var Typewriter: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  isPopupVisible: boolean = false;
  isMenuOpen: boolean = false;
  isOpensubmenu: boolean = false;
  activeItem = 'Home';
  activeDropdown: string | null = null;
  isCoursesDropdownOpen = false;
  isTopbarHidden: boolean = false;
  lastScrollTop: number = 0;
  phoneNumber: string = '800-724-3000'

  makeCall() {
    const phoneNumber = '8007243000'; // Replace this with the actual phone number
    window.location.href = `tel:${phoneNumber}`;
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


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log("Menu Open:", this.isMenuOpen);

    if (this.isMenuOpen) {
      document.addEventListener('click', this.closeMenuOnOutsideClick);
    } else {
      document.removeEventListener('click', this.closeMenuOnOutsideClick);
    }
  }


  // Close menu when clicking outside
  closeMenuOnOutsideClick = (event: Event) => {
    const menu = document.getElementById('navmenu');
    if (menu && !menu.contains(event.target as Node)) {
      this.isMenuOpen = false;
      this.isOpensubmenu = false;
      document.removeEventListener('click', this.closeMenuOnOutsideClick);
    }
  }

  // Close menu when pressing Escape key
  @HostListener('document:keydown.escape', ['$event'])
  onEscapePress(event: KeyboardEvent) {
    this.isMenuOpen = false;
    this.isOpensubmenu = false;
    document.removeEventListener('click', this.closeMenuOnOutsideClick);
  }


  closeMenu() {
    this.isMenuOpen = false;
    this.isOpensubmenu = false;
    document.removeEventListener('click', this.closeMenuOnOutsideClick);
  }

  ngOnInit(): void { }


  setActive(item: string) {
    this.activeItem = item;
    this.isMenuOpen = false;
  }
  showPopup() {
    setTimeout(() => {
      this.isPopupVisible = true;
    }, 1000)
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  toggleDropdown(event: Event) {
    event.stopPropagation(); // Prevent menu from closing when clicking inside dropdown
    this.isCoursesDropdownOpen = !this.isCoursesDropdownOpen;
  }
  @HostListener('document:click', ['$event'])
  closeDropdownOutside(event: Event) {
    this.isCoursesDropdownOpen = false;
  }

  ngAfterViewInit() {
    const app = document.getElementById('app');
    if (app) {
      const typewriter = new Typewriter(app, {
        loop: true
      });

      typewriter.typeString('New Batch 15-March-2025')
        .pauseFor(2500)
        .deleteAll()
        .typeString('')
        .pauseFor(2500)
        .deleteAll()
        .typeString('<strong>FrontEnd Developer</strong>')
        .pauseFor(2500)
        .start();
    }
  }
}
