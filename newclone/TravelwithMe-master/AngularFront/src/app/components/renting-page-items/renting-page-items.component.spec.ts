import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingPageItemsComponent } from './renting-page-items.component';

describe('RentingPageItemsComponent', () => {
  let component: RentingPageItemsComponent;
  let fixture: ComponentFixture<RentingPageItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingPageItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingPageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
