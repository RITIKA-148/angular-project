import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignindeatilsComponent } from './signindeatils/signindeatils.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  {path:'head', component:HeaderComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignindeatilsComponent},
  {path:'detail',component:UserdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
