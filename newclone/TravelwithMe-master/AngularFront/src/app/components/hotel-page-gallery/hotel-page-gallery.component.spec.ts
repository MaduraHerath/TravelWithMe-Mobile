import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPageGalleryComponent } from './hotel-page-gallery.component';

describe('HotelPageGalleryComponent', () => {
  let component: HotelPageGalleryComponent;
  let fixture: ComponentFixture<HotelPageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
