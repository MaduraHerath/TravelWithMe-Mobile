import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingPageHomeComponent } from './renting-page-home.component';

describe('RentingPageHomeComponent', () => {
  let component: RentingPageHomeComponent;
  let fixture: ComponentFixture<RentingPageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingPageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
