// File to bind all modules and components
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { HttpModule }  from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent,UserComponent ],
  bootstrap:    [ AppComponent,UserComponent ]
})
export class AppModule { }
