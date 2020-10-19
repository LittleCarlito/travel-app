import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips;
  selectedtrip;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.trips = this.dataService.gettrips();
  }
  public selecttrip(trip){
    this.selectedtrip = trip;
  }
}
