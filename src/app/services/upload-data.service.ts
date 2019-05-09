import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploadDataService {

  endPointUrl = 'http://control.simarobot.com/api/comandos';
  httpOptions;

  constructor(private http: HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      })
    }

  }

  uploadData(body: any): Observable<any> {

    return this.http.post(this.endPointUrl, body, this.httpOptions);

  }

}
