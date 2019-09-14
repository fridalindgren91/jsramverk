import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MeComponent } from './me/me.component';
import { Kmom01Component } from './reports/kmom01/kmom01.component';
import { Kmom02Component } from './reports/kmom02/kmom02.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'me', component: MeComponent },
  { path: '',
    redirectTo: '/me',
    pathMatch: 'full'
  },
  { path: 'reports/week/1', component: Kmom01Component },
  { path: 'reports/week/2', component: Kmom02Component },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    Kmom01Component,
    Kmom02Component,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
