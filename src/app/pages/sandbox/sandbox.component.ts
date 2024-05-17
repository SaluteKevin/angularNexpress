import { Component } from '@angular/core';
import { ApiService } from '../../apis.service';
@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent {
  // for save data pull from url
  list_message: any;

  constructor(private apiService: ApiService){};
  ngOnInit(){

    // call getMessage() from apiService to pull data from url
    // that assign in api service
    this.apiService.getMessage().subscribe(data => {

      // save data to list_message for show data on example data
      this.list_message = data;
    }, error => {
      console.error(error); // Handle errors centrally
    })
  }
}
