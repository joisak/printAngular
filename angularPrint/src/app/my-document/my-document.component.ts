import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-my-document',
  templateUrl: './my-document.component.html',
  styleUrls: ['./my-document.component.scss']
})
export class MyDocumentComponent implements OnInit {
  documentsId: string[];
  documentDetails: Promise<any>[];

  constructor(route: ActivatedRoute, private printService: PrintService) {
     this.documentsId = route.snapshot.params['documentsId'].split(',');
    }

  ngOnInit() {
    this.documentDetails = this.documentsId
      .map(id => this.getDocumentDetails(id));
    Promise.all(this.documentDetails)
      .then( () => this.printService.onDataReady() );
  }

  getDocumentDetails(documentId) {
    const amount = Math.floor(Math.random() * 100);
    return new Promise(resolve => {
      setTimeout( () => resolve({ amount}), 1000);
    })
  }

}
