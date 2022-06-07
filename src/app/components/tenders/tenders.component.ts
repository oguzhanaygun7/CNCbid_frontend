import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.scss']
})
export class TendersComponent implements OnInit {

  IsSelected: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
