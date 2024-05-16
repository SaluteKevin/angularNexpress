import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// ******
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
// *******
import { HttpClientModule } from '@angular/common/http';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DetailTableComponent } from './detail-table/detail-table.component';
import { ExampleDataComponent } from './example-data/example-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RxjsLearningComponent,
    InputFormComponent,
    DetailTableComponent,
    ExampleDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
