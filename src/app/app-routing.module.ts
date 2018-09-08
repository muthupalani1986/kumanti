import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { StockComponent } from './stock/stock.component';
import { AdminComponent } from './admin/admin.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'admin', component: AdminComponent,children:[
    { path: 'newuser', component: NewuserComponent},
    { path: 'changepwd', component: ChangepwdComponent}
  ]},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }                                                                                                                                                                                                                                                                                                                                                                                                                   
