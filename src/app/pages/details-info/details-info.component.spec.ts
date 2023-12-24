import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInfoComponent } from './details-info.component';

describe('DetailsInfoComponent', () => {
  let component: DetailsInfoComponent;
  let fixture: ComponentFixture<DetailsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsInfoComponent]
    });
    fixture = TestBed.createComponent(DetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
