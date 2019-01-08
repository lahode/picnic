import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';

// Import your library
import { WizardComponent } from './components/wizard/wizard.component';
import { WizardStepComponent } from './components/wizard-step/wizard-step.component';
import { PicnicAddComponent } from './components/picnic-add/picnic-add.component';
import { PicnicAddParticipantComponent } from './components/picnic-add-participant/picnic-add-participant.component';
import { PicnicHomeComponent } from './components/picnic-home/picnic-home.component';
import { PicnicListComponent } from './components/picnic-list/picnic-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PicnicService } from './services/picnic.service';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardStepComponent,
    PicnicAddComponent,
    PicnicAddParticipantComponent,
    PicnicHomeComponent,
    PicnicListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [
    PicnicService,
    AngularFirestore,
    {provide: LOCALE_ID, useValue: 'fr'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
