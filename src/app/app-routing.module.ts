import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "albums", component: AlbumListComponent },
  { path: "albums/:id", component: AlbumDetailComponent },
  { path: "", component: HomeComponent },
  { path: "prodotti/:cat/:data/:id", component: HomeComponent },
  // { path: "", redirectTo: "/home", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// /prodotti/elettrodomestici/2024/cod89
// /prodotti/cucina/2023/cod8999
