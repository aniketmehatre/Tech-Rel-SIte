import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isPopupVisible: boolean = false;
  isMenuOpen: boolean = false;
  isOpensubmenu: boolean = false;
  activeItem = 'Home';
  activeDropdown: string | null = null;
  isCoursesDropdownOpen = false;

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
}
