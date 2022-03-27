import { Component, OnInit } from '@angular/core';
import { NewFeature } from './new-feature.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newFeatures: NewFeature[] = [
    new NewFeature(
      'Needing Mulch?',
      'Did you know that a lot of councils offer free mulch? Check out this map for locations near you. Let me know through the ‘Contact’ form below if there is somewhere I missed. (Currently for Melbourne only – Working to add other cities and states)',
      'Need Mulch?',
      './assets/images/mulch.png',
      '/free-mulch'
    ),
    new NewFeature(
      'Wondering what you should plant now?',
      'Check out this handy guide to see what you should plant this month. It also includes direct links to buy seeds from my favourite seed shop, The Seed Collection (no affiliation). (Currently for Melbourne only – Working to add other cities and states)',
      'What to plant?',
      './assets/images/planting.png',
      '/what-to-plant'
    ),
    new NewFeature(
      'Planning a garden?',
      'We have pulled together several handy gardening calculators. If you are wanting to know how much mulch you’ll need or how much soil you’ll need for pots or gardens, this is the resource for you.',
      'Calculators',
      './assets/images/calculator.png',
      '/calculators'
    ),
  ];

  resetButton() {
    const checkbox = document.querySelector(
      '.nav__checkbox'
    ) as HTMLInputElement;
    checkbox.checked = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
