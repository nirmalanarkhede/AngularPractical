import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
{path:'',component:SigninComponent},
{path:'user-list',component:UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
