import { Component, OnInit } from '@angular/core';
import { Vegetable } from './vegetable.model';

@Component({
  selector: 'app-what-to-plant',
  templateUrl: './what-to-plant.component.html',
  styleUrls: ['./what-to-plant.component.scss'],
})
export class WhatToPlantComponent implements OnInit {
  vegetables: Vegetable[] = [
    new Vegetable(
      'Amaranth',
      'https://www.theseedcollection.com.au/vegetable/amaranth',
      './assets/images/vegetables/amaranth.png',
      ['January', 'February', 'September', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Artichoke (globe)',
      'https://www.theseedcollection.com.au/vegetable/artichoke',
      './assets/images/vegetables/artichoke.png',
      ['August', 'September', 'October', 'November'],
      ['melbourne']
    ),

    new Vegetable(
      'Asparagus',
      'https://www.theseedcollection.com.au/vegetable/asparagus',
      './assets/images/vegetables/asparagus.png',
      ['August', 'September', 'October', 'November'],
      ['melbourne']
    ),

    new Vegetable(
      'Basil',
      'https://www.theseedcollection.com.au/?rf=kw&kw=basil',
      './assets/images/vegetables/basil.png',
      ['September', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Beans',
      'https://www.theseedcollection.com.au/vegetable/bean',
      './assets/images/vegetables/beans.png',
      ['January', 'September', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Beetroot',
      'https://www.theseedcollection.com.au/vegetable/beetroot',
      './assets/images/vegetables/beetroot.png',
      [
        'January',
        'February',
        'April',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Bok Choy',
      'https://www.theseedcollection.com.au/?rf=kw&kw=bok+choy',
      './assets/images/vegetables/bokchoy.png',
      ['March', 'April', 'May', 'September', 'October', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Broad Bean',
      'https://www.theseedcollection.com.au/?rf=kw&kw=broad+beans',
      './assets/images/vegetables/broadbean.png',
      ['April', 'June', 'July'],
      ['melbourne']
    ),

    new Vegetable(
      'Broccoli',
      'https://www.theseedcollection.com.au/vegetable/broccoli',
      './assets/images/vegetables/broccoli.png',
      [
        'January',
        'February',
        'March',
        'April',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Brussel Sprouts',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Brussel+Sprouts',
      './assets/images/vegetables/brusselsprouts.png',
      ['January', 'February', 'April', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Cabbage',
      'https://www.theseedcollection.com.au/vegetable/cabbage',
      './assets/images/vegetables/cabbage.png',
      [
        'February',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Capsicum',
      'https://www.theseedcollection.com.au/vegetable/capsicum',
      './assets/images/vegetables/capsicum.png',
      ['September', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Carrot',
      'https://www.theseedcollection.com.au/vegetable/carrot',
      './assets/images/vegetables/carrot.png',
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Cauliflower',
      'https://www.theseedcollection.com.au/vegetable/cauliflower',
      './assets/images/vegetables/cauliflower.png',
      ['March', 'April'],
      ['melbourne']
    ),

    new Vegetable(
      'Celeriac',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Celeriac',
      './assets/images/vegetables/celeriac.png',
      ['September', 'November'],
      ['melbourne']
    ),

    new Vegetable(
      'Celery',
      'https://www.theseedcollection.com.au/vegetable/celery',
      './assets/images/vegetables/celery.png',
      ['September', 'November'],
      ['melbourne']
    ),

    new Vegetable(
      'Chicory',
      'https://www.theseedcollection.com.au/vegetable/chicory',
      './assets/images/vegetables/chicory.png',
      [
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Chilli',
      'https://www.theseedcollection.com.au/vegetable/chilli',
      './assets/images/vegetables/chilli.png',
      ['September', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Chives',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Chives',
      './assets/images/vegetables/chives.png',
      [
        'January',
        'March',
        'April',
        'May',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Coriander',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Coriander',
      './assets/images/vegetables/coriander.png',
      [
        'January',
        'March',
        'April',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Cucumber',
      'https://www.theseedcollection.com.au/vegetable/cucumber',
      './assets/images/vegetables/cucumber.png',
      ['January', 'September', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Daikon',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Daikon',
      './assets/images/vegetables/daikon.png',
      ['March', 'April', 'May'],
      ['melbourne']
    ),

    new Vegetable(
      'Dill',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Dill',
      './assets/images/vegetables/dill.png',
      ['May', 'June', 'July', 'August', 'September'],
      ['melbourne']
    ),

    new Vegetable(
      'Eggplant',
      'https://www.theseedcollection.com.au/vegetable/eggplant',
      './assets/images/vegetables/eggplant.png',
      ['September', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Endive',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Endive',
      './assets/images/vegetables/endive.png',
      [
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Fennel',
      'https://www.theseedcollection.com.au/vegetable/fennel',
      './assets/images/vegetables/fennel.png',
      ['February', 'March', 'April', 'September', 'October'],
      ['melbourne']
    ),

    new Vegetable(
      'Garlic',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Garlic',
      './assets/images/vegetables/garlic.png',
      ['May', 'June', 'August', 'October'],
      ['melbourne']
    ),

    new Vegetable(
      'Jerusalem Artichoke',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Jerusalem+Artichoke',
      './assets/images/vegetables/jerusalemartichoke.png',
      ['May', 'June', 'July', 'August', 'September'],
      ['melbourne']
    ),

    new Vegetable(
      'Kale',
      'https://www.theseedcollection.com.au/vegetable/kale',
      './assets/images/vegetables/kale.png',
      ['March', 'April', 'September', 'October', 'November'],
      ['melbourne']
    ),

    new Vegetable(
      'Kohl Rabi',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Kohl+Rabi',
      './assets/images/vegetables/kohlrabi.png',
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Leek',
      'https://www.theseedcollection.com.au/vegetable/leek',
      './assets/images/vegetables/leek.png',
      [
        'January',
        'February',
        'March',
        'April',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Lettuce',
      'https://www.theseedcollection.com.au/vegetable/lettuce',
      './assets/images/vegetables/lettuce.png',
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Marjoram',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Marjoram',
      './assets/images/vegetables/marjoram.png',
      ['March', 'April', 'May', 'June', 'July'],
      ['melbourne']
    ),

    new Vegetable(
      'Mint',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Mint',
      './assets/images/vegetables/mint.png',
      ['March', 'April', 'May', 'June', 'July', 'August', 'September'],
      ['melbourne']
    ),

    new Vegetable(
      'Mustard Greens',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Mustard+Greens',
      './assets/images/vegetables/mustardgreens.png',
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Okra',
      'https://www.theseedcollection.com.au/vegetable/okra',
      './assets/images/vegetables/okra.png',
      ['January', 'February', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Onion',
      'https://www.theseedcollection.com.au/vegetable/onion',
      './assets/images/vegetables/onion.png',
      ['February', 'March', 'April', 'June', 'July', 'August'],
      ['melbourne']
    ),

    new Vegetable(
      'Oregano',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Oregano',
      './assets/images/vegetables/oregano.png',
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Pak Choy',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Pak+Choy',
      './assets/images/vegetables/pakchoy.png',
      ['March', 'April', 'May', 'September', 'October'],
      ['melbourne']
    ),

    new Vegetable(
      'Parsley',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Parsely',
      './assets/images/vegetables/parsley.png',
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Parsnip',
      'https://www.theseedcollection.com.au/vegetable/parsnip',
      './assets/images/vegetables/parsnip.png',
      [
        'January',
        'February',
        'March',
        'April',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Pea',
      'https://www.theseedcollection.com.au/vegetable/pea',
      './assets/images/vegetables/pea.png',
      ['May', 'June', 'July', 'August', 'September'],
      ['melbourne']
    ),

    new Vegetable(
      'Potato',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Potato',
      './assets/images/vegetables/potato.png',
      ['August', 'September', 'October', 'November'],
      ['melbourne']
    ),

    new Vegetable(
      'Pumpkin',
      'https://www.theseedcollection.com.au/vegetable/pumpkin',
      './assets/images/vegetables/pumpkin.png',
      ['January', 'September', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Radish',
      'https://www.theseedcollection.com.au/vegetable/radish',
      './assets/images/vegetables/radish.png',
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Rhubarb',
      'https://www.theseedcollection.com.au/vegetable/rhubarb',
      './assets/images/vegetables/rhubarb.png',
      [
        'January',
        'February',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Rocket',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Rocket',
      './assets/images/vegetables/rocket.png',
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Rockmelon',
      'https://www.theseedcollection.com.au/vegetable/rockmelon',
      './assets/images/vegetables/rockmelon.png',
      ['September', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Rosemary',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Rosemary',
      './assets/images/vegetables/rosemary.png',
      ['March', 'April', 'May', 'June', 'July'],
      ['melbourne']
    ),

    new Vegetable(
      'Sage',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Sage',
      './assets/images/vegetables/sage.png',
      ['March', 'April', 'May', 'June', 'July'],
      ['melbourne']
    ),

    new Vegetable(
      'Salsify',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Salsify',
      './assets/images/vegetables/salsify.png',
      ['February', 'March', 'April', 'May', 'September', 'October', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Shallot',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Shallot',
      './assets/images/vegetables/shallot.png',
      [
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Silverbeet',
      'https://www.theseedcollection.com.au/vegetable/silverbeet',
      './assets/images/vegetables/silverbeet.png',
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'September',
        'October',
        'November',
        'December',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Snow Peas',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Snow+Peas',
      './assets/images/vegetables/snowpeas.png',
      ['May', 'June', 'July', 'August', 'September'],
      ['melbourne']
    ),

    new Vegetable(
      'Spinach',
      'https://www.theseedcollection.com.au/vegetable/spinach',
      './assets/images/vegetables/spinach.png',
      ['March', 'April', 'May', 'August', 'September'],
      ['melbourne']
    ),

    new Vegetable(
      'Spring Onion',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Spring+Onion',
      './assets/images/vegetables/springonion.png',
      ['August', 'October'],
      ['melbourne']
    ),

    new Vegetable(
      'Squash',
      'https://www.theseedcollection.com.au/vegetable/squash',
      './assets/images/vegetables/squash.png',
      ['January', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Swede',
      'https://www.theseedcollection.com.au/vegetable/swede',
      './assets/images/vegetables/swede.png',
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'September',
        'October',
        'November',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Sweet Corn',
      'https://www.theseedcollection.com.au/vegetable/corn',
      './assets/images/vegetables/sweetcorn.png',
      ['January', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Thyme',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Thyme',
      './assets/images/vegetables/thyme.png',
      ['March', 'April', 'May', 'June', 'July'],
      ['melbourne']
    ),

    new Vegetable(
      'Tomato',
      'https://www.theseedcollection.com.au/vegetable/tomato',
      './assets/images/vegetables/tomato.png',
      ['August', 'September', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Turnip',
      'https://www.theseedcollection.com.au/vegetable/turnip',
      './assets/images/vegetables/turnip.png',
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'September',
        'October',
        'November',
      ],
      ['melbourne']
    ),

    new Vegetable(
      'Watermelon',
      'https://www.theseedcollection.com.au/vegetable/watermelon',
      './assets/images/vegetables/watermelon.png',
      ['August', 'September', 'October', 'November', 'December'],
      ['melbourne']
    ),

    new Vegetable(
      'Wombok',
      'https://www.theseedcollection.com.au/?rf=kw&kw=Wombok',
      './assets/images/vegetables/wombok.png',
      ['March', 'April', 'September', 'October'],
      ['melbourne']
    ),

    new Vegetable(
      'Zucchini',
      'https://www.theseedcollection.com.au/vegetable/zucchini',
      './assets/images/vegetables/zucchini.png',
      ['September', 'October', 'November', 'December'],
      ['melbourne']
    ),
  ];

  monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor() {}

  ngOnInit(): void {}

  locationArray = ['Melbourne'];

  monthNumber = new Date().getMonth();
  currentMonth = this.monthArray[this.monthNumber];
  month = this.monthArray[this.monthNumber];

  thisMonthsArray = this.vegetables.filter((vegetable) =>
    vegetable.month.includes(this.month)
  );

  setSelected(ngMonth: string) {
    if (ngMonth === this.month) {
      return true;
    }
    return false;
  }

  text1: string = "It's ";
  text2: string = ' so you should plant...';
  changeMonth(e: any) {
    let monthValue = e.target[e.target.selectedIndex].text;
    if (monthValue !== this.currentMonth) {
      this.text1 = 'In ';
      this.text2 = ' you can plant...';
    } else {
      this.text1 = "It's ";
      this.text2 = ' so you should plant...';
    }
    this.month = monthValue;
    this.thisMonthsArray = this.vegetables.filter((vegetable) =>
      vegetable.month.includes(this.month)
    );
  }
}
