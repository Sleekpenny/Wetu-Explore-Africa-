import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsInfoComponent } from './pages/details-info/details-info.component';
import { DataPageComponent } from './backend/data-page/data-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cities/:id', component: DetailsInfoComponent},
  {path: 'backend/data-page', component: DataPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
