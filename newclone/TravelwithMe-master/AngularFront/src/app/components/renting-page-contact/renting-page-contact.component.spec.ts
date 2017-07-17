import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingPageContactComponent } from './renting-page-contact.component';

describe('RentingPageContactComponent', () => {
  let component: RentingPageContactComponent;
  let fixture: ComponentFixture<RentingPageContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingPageContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingPageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
