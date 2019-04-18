import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { effects } from './store/effects';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent, NotLandingComponent } from './core/containers';
import { LandingFormComponent, NotLandingFormComponent } from './core/components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule
  ],
  declarations: [ AppComponent, LandingComponent, NotLandingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
