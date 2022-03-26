import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToPlantComponent } from './what-to-plant.component';

describe('WhatToPlantComponent', () => {
  let component: WhatToPlantComponent;
  let fixture: ComponentFixture<WhatToPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatToPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatToPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
