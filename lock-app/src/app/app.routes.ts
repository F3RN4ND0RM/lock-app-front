import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CondicionesComponent } from './condiciones/condiciones.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent, title: "Lock Keeper" },
    { path: 'privacidad', component: PrivacidadComponent, title: "Lock Keeper" },
    { path: 'condiciones', component: CondicionesComponent, title: "Lock Keeper" },
    { path: '**', component: PageNotFoundComponent },
];
