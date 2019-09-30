import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './components/currency/currency.component';
import { StartComponent } from './components/start/start.component';


const routes: Routes = [
  { path: 'home', component: StartComponent },
  { path: 'currency', component: CurrencyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
