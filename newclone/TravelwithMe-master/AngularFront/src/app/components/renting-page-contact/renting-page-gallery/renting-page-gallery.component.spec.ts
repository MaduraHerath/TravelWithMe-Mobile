import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingPageGalleryComponent } from './renting-page-gallery.component';

describe('RentingPageGalleryComponent', () => {
  let component: RentingPageGalleryComponent;
  let fixture: ComponentFixture<RentingPageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingPageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingPageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
