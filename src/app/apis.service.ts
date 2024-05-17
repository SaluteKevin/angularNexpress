import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  private url = "http://localhost:3000/api/message"
  constructor(private http: HttpClient) {}

  // get message data from api
  getMessage(): Observable<any> { // Return type is now Observable
    return this.http.get<any>(this.url);
  }

  // update message data by api
  postMessage(message: any): Observable<any>{
    return this.http.post<any>(this.url,message)
  }
}
