import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';
import { ChickenComponent } from './chicken/chicken.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "details/:id", component: DetailsComponent},
    {path: "chicken", component: ChickenComponent},
    {path: "**", component: ErrorComponent},
];
