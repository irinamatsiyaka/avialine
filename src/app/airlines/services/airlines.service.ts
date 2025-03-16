import { Injectable } from '@angular/core';
import { Flight } from '../mock-flight-list';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirlinesService {
  flights: Flight[] = [];

  constructor(private firestore: AngularFirestore) {}

  getFlights(): Observable<Flight[]> {
    return this.firestore
      .collection('flight-list')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Flight['data'];
            const uuid = a.payload.doc.id;
            return { uuid, data } as Flight;
          })
        )
      );
  }

  getFlightByUuid(uuid: string): Observable<Flight | undefined> {
    return this.firestore
      .collection('flight-list', (ref) => ref.where('__name__', '==', uuid))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          if (actions.length > 0) {
            const a = actions[0];
            const data = a.payload.doc.data() as Flight['data'];
            const uuid = a.payload.doc.id;
            return { uuid, data } as Flight;
          } else {
            return undefined;
          }
        })
      );
  }

  addFlight(flight: Flight): Promise<void> {
    return this.firestore
      .collection('flight-list')
      .add(flight.data)
      .then(() => {});
  }

  deleteFlight(id: string): Promise<void> {
    return this.firestore.collection('flight-list').doc(id).delete();
  }

  updateFlight(flight: Flight): Promise<void> {
    const id = flight.uuid;
    return this.firestore.collection('flight-list').doc(id).update({
      id: flight.data.id,
      from: flight.data.from,
      to: flight.data.to,
      date: flight.data.date,
      luggage: flight.data.luggage,
      price: flight.data.price,
    });
  }
}
