import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> { // Return type is now Observable
    return this.http.get<any>('http://localhost:3000/api/message');
  }
}
