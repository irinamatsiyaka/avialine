import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCenterComponent } from './flight-center.component';

describe('FlightCenterComponent', () => {
  let component: FlightCenterComponent;
  let fixture: ComponentFixture<FlightCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
