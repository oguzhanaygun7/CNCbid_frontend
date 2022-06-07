import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./shared/layouts/main-layout/main-layout.component";
import {TendersComponent} from "./components/tenders/tenders.component";

const routes: Routes = [
  {
    path:'',
    component: MainLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/ihalelerim',
        pathMatch:'full'
      },
      {
        path:'ihalelerim',
        component: TendersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
