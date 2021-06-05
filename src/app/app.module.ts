import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { DialogModule } from 'primeng/dialog';

import { RouterModule } from '@angular/router';
import { DialogComponent } from './login/dialog.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { TeamComponent } from './team/team.component';
import { BuyComponent } from './buy/buy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DialogComponent,
    TeamComponent,
    BuyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: HomeComponent },
      { path: 'team', component: TeamComponent },
      { path: 'buy', component: BuyComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ButtonModule,
    InputTextModule,
    TabMenuModule,
    DialogModule,
    TimelineModule,
    CardModule,
    DividerModule,
    FieldsetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
