import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './users/list/list.component';
import { AddComponent } from './users/add/add.component';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './users/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
