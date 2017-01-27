import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LendersComponent } from './lenders/lenders.component';
import { LenderDetailComponent } from './lender-detail/lender-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LendersComponent
  },
  {
    path: 'lenders/:id',
    component: LenderDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
