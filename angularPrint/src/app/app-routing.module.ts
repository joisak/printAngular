import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerDashboardComponent } from "./customer-dashboard/customer-dashboard.component";
import { MyDocumentComponent } from "./my-document/my-document.component";
import { PrintLayoutComponent } from "./print-layout/print-layout.component";

const routes: Routes = [
  {
    path: "print",
    outlet: "print",
    component: PrintLayoutComponent,
    children: [{ path: "invoice/:documentsId", component: MyDocumentComponent }]
  },
  {
    path: "dashboard",
    component: CustomerDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
