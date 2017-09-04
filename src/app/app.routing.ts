import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from "app/page2/page2.component";
import { Page1Component } from "app/page1/page1.component";

const appRoutes: Routes = [
    {
        path: 'page1',
        component: Page1Component
    },
    {
        path: 'page2',
        component: Page2Component
    },
    {
        path: '',
        redirectTo: '/page1',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
