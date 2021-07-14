import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';
import { ProductService } from './productservice';

import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VirtualScrollerModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})

export class AppModule { }
