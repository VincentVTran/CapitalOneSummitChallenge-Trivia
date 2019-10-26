import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  resultData: any = [
    {
      "answer": "Maine",
      "question": "Traditionally speaking, as this state goes, \"so goes the nation\"",
      "value": 200,
      "airdate": "1985-02-08T12:00:00.000Z",
      "category_id": 1,
    },
    {
      "id": 146236,
      "answer": "primary",
      "question": "This early election becomes a verb when an incumbent is out-conservatized by his own party",
      "value": 1000,
      "airdate": "2014-07-08T12:00:00.000Z",
      "category_id": 1,
      "game_id": 4557,
      "invalid_count": null
  },
  {
      "id": 1,
      "answer": "Election Day",
      "question": "1st Tuesday after the 1st Monday in November",
      "value": 100,
      "airdate": "1985-02-08T12:00:00.000Z",
      "category_id": 1,
      "game_id": null,
      "invalid_count": 1
  }
  ];
  currentPage:Number;
  constructor(private dataService:DataService) { this.currentPage = 0}

  ngOnInit() {
    this.dataService.currentIndex = this.currentPage.toString();
  }

}
