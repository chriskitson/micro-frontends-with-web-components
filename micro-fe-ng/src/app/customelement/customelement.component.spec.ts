import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomelementComponent } from './customelement.component';

describe('CustomelementComponent', () => {
  let component: CustomelementComponent;
  let fixture: ComponentFixture<CustomelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
