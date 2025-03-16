import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightCenterComponent } from '../flight-center/flight-center.component';
import { FlightListComponent } from '../flight-list/flight-list.component';
import { FlightDetailsComponent } from '../flight-details/flight-details.component';
import { AddFlightFormComponent } from '../add-flight-form/add-flight-form.component';

const routes: Routes = [
  {
    path: '',
    component: FlightCenterComponent,
    children: [
      {
        path: 'flights',
        component: FlightListComponent,
        children: [
          { path: 'add', component: AddFlightFormComponent },
          { path: 'edit/:uuid', component: AddFlightFormComponent },
          { path: ':uuid', component: FlightDetailsComponent },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
