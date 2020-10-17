import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact: {id, origin, dest, date, numTrav, submitted, price} = {id: null, origin: '',
            dest: '', date: '', numTrav: null, submitted: '', price: null};

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  createContact(){
    this.contact.submitted = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.contact.price = (this.contact.numTrav * 150);
    console.log(this.contact);
    this.dataService.createContact(this.contact);
    this.contact = {id: null, origin: '', dest: '', date: '', numTrav: null, submitted: '', price: null};

  }
}
