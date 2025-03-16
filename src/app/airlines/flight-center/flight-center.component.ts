import { Component } from '@angular/core';
import { Flight } from '../mock-flight-list';
import { AirlinesService } from '../services/airlines.service';

@Component({
  selector: 'app-flight-center',
  templateUrl: './flight-center.component.html',
})
export class FlightCenterComponent {
  flights: Flight[] = [];

  constructor(private airlinesService: AirlinesService) {}

  onFlightAdded(newFlight: Flight): void {
    this.flights.push(newFlight);
  }
}
