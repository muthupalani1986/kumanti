import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule }    from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SalesComponent } from './sales/sales.component';
import { StockComponent } from './stock/stock.component';
import { AdminComponent } from './admin/admin.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    LoginComponent,    
    DashboardComponent,
    PageNotFoundComponent,
    SignupComponent,
    SalesComponent,
    StockComponent,
    AdminComponent,
    NewuserComponent,
    ChangepwdComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
