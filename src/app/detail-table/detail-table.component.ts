import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent {

  // column names
  public displayColumn: string[] = ['id', 'name', 'description'];
  
  @Input() dataSource: any =[];

}
