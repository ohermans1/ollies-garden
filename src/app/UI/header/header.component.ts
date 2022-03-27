import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    new Promise((resolve) => {
      this.loadScript();
    });
  }
  resetButton() {
    const checkbox = document.querySelector(
      '.nav__checkbox'
    ) as HTMLInputElement;
    checkbox.checked = false;
  }

  public loadScript() {
    const node = document.createElement('script');
    node.src = 'assets/calculator.js'; // put there your js file location
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
