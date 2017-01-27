import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LendersComponent } from './lenders/lenders.component';
import { LenderDetailComponent } from './lender-detail/lender-detail.component';
import { AboutComponent } from './about/about.component';
import { NewLenderComponent } from './new-lender/new-lender.component';
import { AdminComponent } from './admin/admin.component';





const appRoutes: Routes = [
  {
    path: '',
    component: LendersComponent
  },
  {
    path: 'lenders/:key',
    component: LenderDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'new-lender',
    component: NewLenderComponent
  },
  {
    path: 'lender-admin',
    component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
