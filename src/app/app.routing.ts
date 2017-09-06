import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { SignAgreementComponent } from 'app/signAgreement/signAgreement.component';
import { CompleteAgreementComponent } from 'app/complete/complete.component';
import { TransitionComponent } from 'app/TransitionPage/transition.component';
import { MembersHomeComponent } from "app/members/home/members-home.component";
import { MembersDocumentsComponent } from "app/members/documents/members-documents.component";

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'members-home',
        component: MembersHomeComponent
    },
    {
        path: 'members-documents',
        component: MembersDocumentsComponent
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
        redirectTo: 'members-home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
