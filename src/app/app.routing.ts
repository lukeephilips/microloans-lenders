import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LendersComponent } from './lenders/lenders.component';
import { LenderDetailComponent } from './lender-detail/lender-detail.component';
import { AboutComponent } from './about/about.component';



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
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
