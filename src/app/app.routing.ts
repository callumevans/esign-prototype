import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from "app/page2/page2.component";
import { HomeComponent } from "app/home/home.component";
import { MembersComponent } from "app/members/members.component";

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'members',
        component: MembersComponent
    },
    {
        path: 'page2',
        component: Page2Component
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }