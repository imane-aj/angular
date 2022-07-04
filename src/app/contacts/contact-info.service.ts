import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Contact} from '../contacts/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  
  constructor(private httpClient:HttpClient) { }
  //get contacts to show them in the view
  getContacts():Observable<Contact[]>{
    // var contacts =[
    //   {name:'imane', lName:'ajroudi', tel:'01556663655', status:'active'},
    //   {name:'sara', lName:'akka', tel:'54156453', status:'active'},
    //   {name:'soufiane', lName:'moetaz', tel:'315646', status:'inactive'},
    //   {name:'dareen', lName:'ajroudi', tel:'31654164', status:'active'}
    // ]
    
    // return contacts;
    
    return this.httpClient.get<Contact[]>('http://localhost:3000/contacts');
  }
  
  //add contacts
  addContact(payload: Contact):Observable<Contact>{
    
    return this.httpClient.post<Contact>("http://localhost:3000/contacts", payload);
  }
  
  //get contact by id to update it 
  getById(id: number) {
 return this.httpClient.get<Contact>("http://localhost:3000/contacts/"+id);
}
 //update contact
update(idToEdit:Contact):Observable<Contact>{
 return this.httpClient.put<Contact>("http://localhost:3000/contacts/"+idToEdit.id,idToEdit);
}

//delet contact
  delete(id:number){
    return this.httpClient.delete<Contact>("http://localhost:3000/contacts/"+id);
 }

 //search
//  search(searchItem:string):Observable<Contact[]>{
//   return this.httpClient.get<Contact[]>("http://localhost:3000/contacts/"+searchItem);
//  }
}



// addContact(newContact: Contact):Observable<Contact>{
    
  //   return this.httpClient.post<Contact>("'http://localhost:3000/contacts'", newContact);
  // }