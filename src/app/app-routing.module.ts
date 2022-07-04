import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AddContactsComponent } from './contacts/add-contacts/add-contacts.component';
import { ViewContactsComponent } from './contacts/view-contacts/view-contacts.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {path:'add', component:AddContactsComponent},
  {path:'view', component:ViewContactsComponent},
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'view',pathMatch:'full'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
