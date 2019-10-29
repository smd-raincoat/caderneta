import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import{HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ViagemPage} from '../pages/viagem/viagem'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CadastroViagemPage} from '../pages/cadastro-viagem/cadastro-viagem';
import { ChecklistPage } from '../pages/checklist/checklist';
import { AddPage } from '../pages/add/add';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroViagemPage,
    ViagemPage,
    ChecklistPage,
    AddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroViagemPage,
    ViagemPage,
    ChecklistPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
