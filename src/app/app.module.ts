import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-key';



import { AppComponent } from './app.component';
import { LendersComponent } from './lenders/lenders.component';
import { LenderDetailComponent } from './lender-detail/lender-detail.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { LenderTypePipe } from './lender-type.pipe';
import { NewLenderComponent } from './new-lender/new-lender.component';
import { EditLenderComponent } from './edit-lender/edit-lender.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    LendersComponent,
    LenderDetailComponent,
    AboutComponent,
    AdminComponent,
    LenderTypePipe,
    NewLenderComponent,
    EditLenderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
