import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelLocComponent } from './travel-loc.component';

describe('TravelLocComponent', () => {
  let component: TravelLocComponent;
  let fixture: ComponentFixture<TravelLocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelLocComponent]
    });
    fixture = TestBed.createComponent(TravelLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
