import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { DemoComponent } from './demo/demo.component';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AlertComponent } from './alert/alert.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { LoginComponent } from './login/login.component';

import { MaterialModule } from './material/material.module';
// notice this

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    NgxDatatableModule,
    MaterialModule,
  ],
  declarations: [AppComponent, LoginComponent, DemoComponent, AlertComponent],
  bootstrap: [AppComponent],
  providers: [UserService, HttpClient],
})
export class AppModule {}
