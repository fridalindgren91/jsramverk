import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MeComponent } from './me/me.component';
import { Kmom01Component } from './reports/kmom01/kmom01.component';

const appRoutes: Routes = [
  { path: 'me', component: MeComponent },
  { path: '',
    redirectTo: '/me',
    pathMatch: 'full'
  },
  { path: 'reports/week/1', component: Kmom01Component }
];

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    Kmom01Component
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
