import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { HomeComponent } from './componenti/home/home.component';

const routes: Routes = [
  {path: '/', component: HomeComponent},
  {path: '/about', component: AboutComponent},
  {path: '/contact', component: ContactComponent},
];

//navigazione non sta funzionando, provo magari su un altro progetto più pulito con meno roba

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
