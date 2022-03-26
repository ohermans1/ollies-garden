import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.scss'],
})
export class CalculatorsComponent implements OnInit {
  constructor() {
    if (!window.location.hash.includes('#ready')) {
      window.location.href += '#ready';
      window.location.reload();
    }
  }

  ngOnInit(): void {}
}
