import { Component, OnInit } from '@angular/core';
import { Flight } from '../mock-flight-list';
import { ActivatedRoute } from '@angular/router';
import { AirlinesService } from '../services/airlines.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
})
export class FlightDetailsComponent implements OnInit {
  flight: Flight | undefined;

  constructor(
    private route: ActivatedRoute,
    private airlinesService: AirlinesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const flightUuid = paramMap.get('uuid');
      if (flightUuid) {
        this.airlinesService.getFlightByUuid(flightUuid).subscribe(
          (flight) => {
            if (flight) {
              this.flight = { ...flight };
              console.log('Загруженные данные рейса:', this.flight);
            } else {
              console.error('Рейс не найден');
            }
          },
          (error) => {
            console.error('Ошибка при загрузке данных рейса:', error);
          }
        );
      }
    });
  }
}
