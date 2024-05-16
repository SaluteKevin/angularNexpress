import { Component } from '@angular/core';
// ******
import { ApiService } from './apis.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // declaration
  title = 'hello'

  // for save data pull from url
  list_message: any;

  constructor(private apiService: ApiService){};
  ngOnInit(){

    // call getMessage() from apiService to pull data from url
    // that assign in api service
    this.apiService.getMessage().subscribe(data => {
      // show data in console
      console.table(data);

      // save data to list_message for show data on example data
      this.list_message = data;
    }, error => {
      console.error(error); // Handle errors centrally
    })
  }
}
