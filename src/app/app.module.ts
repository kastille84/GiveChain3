import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Routes from app.routing.ts
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './home/search/search.component';
import { BulletinBoardComponent } from './home/bulletin-board/bulletin-board.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './home/register/register.component';

// services
import { UserService } from './services/user.service';
import { StickyService } from './services/sticky.service';
import { LoginComponent } from './home/login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { StickiesListComponent } from './dashboard/stickies-list/stickies-list.component';
import { StickiesReservedComponent } from './dashboard/stickies-reserved/stickies-reserved.component';
import { StickiesRedeemedComponent } from './dashboard/stickies-redeemed/stickies-redeemed.component';
import { StickyComponent } from './shared/sticky/sticky.component';
import { StickyCreateComponent } from './dashboard/sticky-create/sticky-create.component';
import { ChangePasswordComponent } from './home/change-password/change-password.component';
import { NewPasswordComponent } from './home/new-password/new-password.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavComponent,
    SearchComponent,
    BulletinBoardComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    StickiesListComponent,
    StickiesReservedComponent,
    StickiesRedeemedComponent,
    StickyComponent,
    StickyCreateComponent,
    ChangePasswordComponent,
    NewPasswordComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    routing
  ],
  providers: [
      UserService,
      StickyService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
