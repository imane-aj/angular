import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from '../contact-info.service';
import {Contact} from '../contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  newContact : Contact = new Contact();
  // newContact: Contact = {
  //   id: 0,
  //   name: '',
  //   Lname: '',
  //   tell: 0,
  //   status: ''
  // };
  constructor(private ContactInfoService:ContactInfoService,private router:Router) { }

  ngOnInit(): void {
  }
  // addContact(){
  //   this.ContactInfoService.addContact(this.newContact).subscribe(
  //    (response)=>{
  //     console.log(response);
  //     this.router.navigate(['view']);
  //    }),(error) =>{
  //     console.log(error)
  //    }
    
  // }
  addContact(){
    this.ContactInfoService.addContact(this.newContact)
    .subscribe({
      next:(data) => {
        this.router.navigate(["view"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
