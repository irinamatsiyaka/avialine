import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightCenterComponent } from './airlines/flight-center/flight-center.component'; // Главная страница по умолчанию

const routes: Routes = [
  { path: '', component: FlightCenterComponent },

  {
    path: 'flights',
    loadChildren: () =>
      import('./airlines/airlines.module').then((m) => m.AirlinesModule),
  },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
