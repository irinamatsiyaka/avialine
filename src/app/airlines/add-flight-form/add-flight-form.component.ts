import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Flight } from '../mock-flight-list';
import { AirlinesService } from '../services/airlines.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-flight-form',
  templateUrl: './add-flight-form.component.html',
})
export class AddFlightFormComponent implements OnInit {
  flight: Flight = {
    uuid: '',
    data: {
      id: 0,
      from: '',
      to: '',
      date: '',
      luggage: 0,
      price: 0,
    },
  };
  isEditing = false;

  @Output() flightAdded = new EventEmitter<Flight>();

  constructor(
    private airlinesService: AirlinesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const flightUuid = paramMap.get('uuid');
      console.log('Полученный UUID:', flightUuid);
      if (flightUuid) {
        this.isEditing = true;
        this.loadFlightData(flightUuid);
      }
    });
  }

  loadFlightData(uuid: string) {
    this.airlinesService.getFlightByUuid(uuid).subscribe(
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

  onSubmit() {
    if (this.validateFlight()) {
      if (this.isEditing) {
        this.airlinesService
          .updateFlight(this.flight)
          .then(() => {
            this.router.navigate(['/flights']);
          })
          .catch((error) => {
            console.error('Ошибка при обновлении рейса:', error);
          });
      } else {
        this.airlinesService
          .addFlight(this.flight)
          .then(() => {
            this.flightAdded.emit(this.flight);
            this.resetForm();
            this.router.navigate(['/flights']);
          })
          .catch((error) => {
            console.error('Ошибка при добавлении рейса:', error);
          });
      }
    } else {
      alert('Все поля должны быть заполнены корректно!');
    }
  }

  validateFlight(): boolean {
    return (
      this.flight.data.from.trim() !== '' &&
      this.flight.data.to.trim() !== '' &&
      this.flight.data.date.trim() !== '' &&
      this.flight.data.luggage >= 0 &&
      this.flight.data.price >= 0
    );
  }

  resetForm() {
    this.flight = {
      uuid: '',
      data: {
        id: 0,
        from: '',
        to: '',
        date: '',
        luggage: 0,
        price: 0,
      },
    };
  }
}
