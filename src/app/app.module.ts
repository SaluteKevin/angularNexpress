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
import { InputFormComponent } from './components/input-form/input-form.component';
import { DetailTableComponent } from './components/detail-table/detail-table.component';
import { ExampleDataComponent } from './components/example-data/example-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
// ******
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    DetailTableComponent,
    ExampleDataComponent,
    NavBarComponent,
    LandingComponent,
    SandboxComponent
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
    ReactiveFormsModule,
    RouterOutlet
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule { }
