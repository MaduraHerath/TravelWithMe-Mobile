import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPageHomeComponent } from './hotel-page-home.component';

describe('HotelPageHomeComponent', () => {
  let component: HotelPageHomeComponent;
  let fixture: ComponentFixture<HotelPageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
