import { IDate } from './../../../model/date';
import { DataService } from './../../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  dates: Array<IDate> = [
    {
      id: '145',
      begins: '2020-10-17',
      ends: '2020-10-23',
      value: ''
    },
    {
      id: '292',
      begins: '2020-10-17',
      ends: '2020-10-23',
      value: ''
    },
    {
      id: '298',
      begins: '2020-10-17',
      ends: '2020-10-23',
      value: ''
    }
  ];
  value: string;
  begin: string;
  end: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.setDate(this.dates);
  }

  setDate(date): void {
    date.forEach((elem) => {
      elem.value = {};
      this.dataService.getDate(elem.id, elem.begins, elem.ends).subscribe((data) => {
        elem.value = data;
      });
    });
  }

  onSubmit(): void{
    if ((this.end && this.begin) && (+this.begin.match(/[0-9]+/g)[2] <= +this.end.match(/[0-9]+/g)[2])) {
      this.dates.forEach((elem) => {
         elem.begins = this.begin;
         elem.ends = this.end;
      });
      this.setDate(this.dates);
    }
    else {
      alert('Uncorrect values');
    }
  }

}
