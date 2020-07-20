import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
})
export class ValueComponent implements OnInit {
  constructor(private http: HttpClient) {}

  values: any;

  ngOnInit(): void {
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/values').subscribe(
      (res) => {
        this.values = res;
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}