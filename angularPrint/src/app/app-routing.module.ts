import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { MyDocumentComponent } from './my-document/my-document.component';


const routes: Routes = [{
  path: 'print',
  outlet: 'print',
  component: PrintLayoutComponent,
  children: [
    { path: 'invoice/:documentsId', component: MyDocumentComponent }
  ]
}];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
