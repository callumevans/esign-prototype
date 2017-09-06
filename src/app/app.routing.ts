import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from 'app/page2/page2.component';
import { HomeComponent } from 'app/home/home.component';
import { SignAgreementComponent } from 'app/signAgreement/signAgreement.component';
import { CompleteAgreementComponent } from 'app/complete/complete.component';
import { TransitionComponent } from 'app/TransitionPage/transition.component';
import { MembersComponent } from 'app/members/members.component';

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
        path: 'signAgreement',
        component: SignAgreementComponent
    },
    {
        path: 'completeAgreement',
        component: CompleteAgreementComponent
    },
    {
        path: 'transition',
        component: TransitionComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
