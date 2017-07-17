import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewidjetComponent } from './typewidjet.component';

describe('TypewidjetComponent', () => {
  let component: TypewidjetComponent;
  let fixture: ComponentFixture<TypewidjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypewidjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypewidjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
