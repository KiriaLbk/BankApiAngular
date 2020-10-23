import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getDate(id: string, begin: string, end: string): Observable<any>{
    return this.http.get(`https://www.nbrb.by/API/ExRates/Rates/Dynamics/${id}?startDate=${begin}&endDate=${end}`).pipe(
      map(response => {
        let arr = {
          name: ''
        };
        this.getDateNumbers(response, arr);
        if (response[0].Cur_ID === 145) {
          arr.name = 'USD';
        } else if (response[0].Cur_ID === 292) {
          arr.name = 'EUR';
        } else {
          arr.name = 'RUR';
        }
        return arr;
      })
    );
  }

  getDateNumbers(date, arr): void {
    arr.date = [];
    arr.course = [];
    date.forEach(element => {
      arr.date.push(element.Date.split('T')[0].replace(/([0-9]+)[-]([0-9]+)[-]([0-9]+)/, '$3/$2/$1'));
      arr.course.push(element.Cur_OfficialRate);
    });
  }
}
