import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {
    window.addEventListener('resize', () => {
      this.menuVisible = window.innerWidth < 500 ? false : true;
    });
  }

  menuVisible = window.innerWidth < 500 ? false : true;

  ngOnInit(): void {}

  showMenu() {
    if (window.innerWidth > 500) {
      return;
    }
    this.menuVisible = !this.menuVisible;
  }

  getDisplay() {
    return this.menuVisible === true ? 'flex' : 'none';
  }
}
