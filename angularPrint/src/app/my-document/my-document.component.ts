import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-document',
  templateUrl: './my-document.component.html',
  styleUrls: ['./my-document.component.scss']
})
export class MyDocumentComponent implements OnInit {
  documentsId: string[];
  constructor(route: ActivatedRoute) {
     this.documentsId = route.snapshot.params['documentsId'].split(',');
    }

  ngOnInit() {
  }

}
