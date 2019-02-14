import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import {LoginComponent} from '../track-trace/login/login.component';

const routes: Routes = [
    { path: 'track/login', component: LoginComponent, data: { title: 'login' } },
    { path: '**', component: PageNotFoundComponent, data: { title: '404 - Page not found' } }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
