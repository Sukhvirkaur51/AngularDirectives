import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { PipesComponent } from './pipes/pipes.component';
import{ColorchangeDirective} from './colorchange.directive';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatCardModule} from '@angular/material/card';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveComponent,
    PipesComponent,
   ColorchangeDirective,
   SqrtPipe,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   MatRadioModule,
   MatToolbarModule,
   MatCardModule,
   MatCheckboxModule,
   MatFormFieldModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
