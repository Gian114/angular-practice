import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './app/componenti/home/home.component';
import { AboutComponent } from './app/componenti/about/about.component';
import { ContactComponent } from './app/componenti/contact/contact.component';

const routes: Routes = [
    {path: '/', component: HomeComponent},
    {path: '/about', component: AboutComponent},
    {path: '/contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}