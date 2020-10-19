import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TripFormComponent } from '../trip-form/trip-form.component';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent implements OnInit {

  trip: {id, origin, dest, date, numTrav, submitted, price} = {id: null, origin: '',
            dest: '', date: '', numTrav: null, submitted: '', price: null};

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  createTrip(){
    this.trip.submitted = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.trip.price = (this.trip.numTrav * 150);
    console.log(this.trip);
    this.dataService.createTrip(this.trip);
    this.trip = {id: null, origin: '', dest: '', date: '', numTrav: null, submitted: '', price: null};

  }
}
