import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCenterComponent } from './flight-center/flight-center.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightsRoutingModule } from './services/flight-routing.module';
import { RouterModule } from '@angular/router';
import { AddFlightFormComponent } from './add-flight-form/add-flight-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FlightCenterComponent,
    FlightListComponent,
    FlightDetailsComponent,
    AddFlightFormComponent,
  ],
  imports: [CommonModule, RouterModule, FlightsRoutingModule, FormsModule],
})
export class AirlinesModule {}
