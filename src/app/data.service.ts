import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  trips = [
    {id: 1, origin: 'MKE', dest: 'ORD', date: '2021-04-14', numTrav: 5, submitted: '2020-08-01', price: null},
    {id: 2, origin: 'SFF', dest: 'NYE', date: '2020-12-22', numTrav: 19, submitted: '2020-08-20', price: null},
    {id: 3, origin: 'JFK', dest: 'MLL', date: '2021-07-02', numTrav: 8, submitted: '2020-10-03', price: null},
    {id: 4, origin: 'END', dest: 'GYU', date: '2021-01-15', numTrav: 10, submitted: '2020-10-15', price: null}
  ];

  constructor() {
    for (const trip of this.trips) {
      trip.price = (trip.numTrav * 150);
    }
  }

  public gettrips(): Array<{id, origin, dest, date, numTrav, submitted, price}>{
    return this.trips;
  }
  public createTrip(trip: {id, origin, dest, date, numTrav, submitted, price}): void{
    this.trips.push(trip);
  }
}
