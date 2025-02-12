import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isMenuOpen: boolean = false;
  isOpensubmenu: boolean = false;
  activeItem = 'Home';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log("Menu Open:", this.isMenuOpen);

    if (this.isMenuOpen) {
      document.addEventListener('click', this.closeMenuOnOutsideClick);
    } else {
      document.removeEventListener('click', this.closeMenuOnOutsideClick);
    }
  }

  toggleDropdown() {
    console.log(this.isOpensubmenu);
    this.isOpensubmenu = !this.isOpensubmenu;
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
}
