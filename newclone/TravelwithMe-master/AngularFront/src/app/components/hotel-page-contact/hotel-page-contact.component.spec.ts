import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPageContactComponent } from './hotel-page-contact.component';

describe('HotelPageContactComponent', () => {
  let component: HotelPageContactComponent;
  let fixture: ComponentFixture<HotelPageContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPageContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
