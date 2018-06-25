import {Routes, Router} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutUsComponent}
];
