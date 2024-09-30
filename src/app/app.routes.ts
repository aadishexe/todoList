import { Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { AboutComponent } from './MyComponents/about/about.component';

export const routes: Routes = [
    {path:'', component: HomeComponent, title: "Home"},
    {path:'about', component: AboutComponent, title: "About"},
];
