import { ContactPageComponent } from './contact-page/contact-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppComponent } from './app.component'

import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';


//Design Modules
import {
 MatExpansionModule,
 MatInputModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomePageComponent,
    ContactPageComponent,
    PortfolioPageComponent,
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatSnackBarModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



