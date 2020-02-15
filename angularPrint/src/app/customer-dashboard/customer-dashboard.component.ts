import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customer-dashboard",
  templateUrl: "./customer-dashboard.component.html",
  styleUrls: ["./customer-dashboard.component.scss"]
})
export class CustomerDashboardComponent implements OnInit {
  printService: any;
  constructor() {}

  ngOnInit() {}

  onPrintDocument() {
    const invoiceIds = ["101", "102"];
    this.printService.printDocument("invoice", invoiceIds);
  }
}
