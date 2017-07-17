import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingPageComponent } from './renting-page.component';

describe('RentingPageComponent', () => {
  let component: RentingPageComponent;
  let fixture: ComponentFixture<RentingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
