import { Component, OnInit } from '@angular/core';
import { AirlinesService } from '../services/airlines.service';
import { Flight } from '../mock-flight-list';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
})
export class FlightListComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private airlinesService: AirlinesService) {}

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.airlinesService.getFlights().subscribe((flights) => {
      this.flights = flights;
    });
  }

  deleteFlight(uuid: string): void {
    this.airlinesService.deleteFlight(uuid).then(() => {
      this.flights = this.flights.filter((flight) => flight.uuid !== uuid);
    });
  }
}
