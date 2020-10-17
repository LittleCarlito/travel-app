import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, origin: 'MKE', dest: 'ORD', date: '10/02/2020', numTrav: 1, submitted: '01/11/2019', price: null},
    {id: 2, origin: 'MKE', dest: 'ORD', date: '10/02/2020', numTrav: 2, submitted: '01/11/2019', price: null},
    {id: 3, origin: 'MKE', dest: 'ORD', date: '10/02/2020', numTrav: 3, submitted: '01/11/2019', price: null},
    {id: 4, origin: 'MKE', dest: 'ORD', date: '10/02/2020', numTrav: 4, submitted: '01/11/2019', price: null}
  ];

  constructor() {
    for (const contact of this.contacts) {
      contact.price = (contact.numTrav * 150);
    }
  }

  public getContacts(): Array<{id, origin, dest, date, numTrav, submitted, price}>{
    return this.contacts;
  }
  public createContact(contact: {id, origin, dest, date, numTrav, submitted, price}): void{
    this.contacts.push(contact);
  }
}
