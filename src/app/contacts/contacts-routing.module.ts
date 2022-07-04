import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EditComponent } from './edit/edit.component';
// import { AddContactsComponent } from './add-contacts/add-contacts.component';
// import { ViewContactsComponent } from './view-contacts/view-contacts.component';

const routes: Routes = [
  // {path:'edit/:id', component: EditComponent},
  // {path:'add', component: AddContactsComponent},
  // {path:'view', component: ViewContactsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
