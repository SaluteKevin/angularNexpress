import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-data',
  templateUrl: './example-data.component.html',
  styleUrls: ['./example-data.component.css']
})
export class ExampleDataComponent {
  @Input() list_message: any;
}
