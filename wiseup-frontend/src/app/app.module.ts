import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Shared/Navbar/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, RouterLink],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
