import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from '../contact-info.service';
import {Contact} from '../contact';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

declare var window: any;
@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {

  date !: Date;
  contacts:Contact[] = [];
  deleteModal: any;
  editModal: any;
  idTodelete: number = 0;
  idToEdit : Contact = new Contact();
  searchItem !: string;
  personId!: number;
    constructor(private ContactInfoService:ContactInfoService, private router: Router) { }
  
  gotoAdd(){
    this.router.navigate(['add']);  // define your component where you want to go
}

  ngOnInit(){
    this.date = new Date();
    // this.contacts = this.ContactInfoService.getContacts();
    // this.ContactInfoService.getContacts().subscribe((
    //   response : Contact[]
    // )=>
    // this.contacts = response)
    this.get();
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.editModal = new window.bootstrap.Modal(
      document.getElementById('editModal')
    );
  }

  
  get() {
    this.ContactInfoService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  getIdToUpdate(id: number){
    this.ContactInfoService.getById(id).subscribe((data :any) => {
      this.idToEdit = data;
      // console.log(this.idToEdit)
    });
  }

  update() {
    this.ContactInfoService.update(this.idToEdit)
    .subscribe({
      next:(response: any) => {
    
        this.editModal.hide();
        
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  removeItemModal(id: number){
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    console.log(this.idTodelete)
    this.ContactInfoService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.contacts = this.contacts.filter(_ => _.id != this.idTodelete)
        // this.contacts.splice(this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

  search(){
    this.ContactInfoService.getContacts().subscribe((data) => {
      this.contacts = data
      this.contacts = this.contacts.filter(_ => _.name.includes(this.searchItem));
      
    });
    console.log(this.contacts)
    console.log(this.searchItem)
  }

}
