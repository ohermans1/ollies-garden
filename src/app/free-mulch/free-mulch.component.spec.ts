import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeMulchComponent } from './free-mulch.component';

describe('FreeMulchComponent', () => {
  let component: FreeMulchComponent;
  let fixture: ComponentFixture<FreeMulchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeMulchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeMulchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
