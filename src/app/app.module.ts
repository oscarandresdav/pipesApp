import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Módulos personalizados
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localEsEc from '@angular/common/locales/es-EC';
import localFr from '@angular/common/locales/fr';
import localIt from '@angular/common/locales/it';
import localJa from '@angular/common/locales/ja';
import localTk from '@angular/common/locales/tk';
import { registerLocaleData } from '@angular/common'
registerLocaleData(localEsEc);
registerLocaleData(localFr);
registerLocaleData(localIt);
registerLocaleData(localJa);
registerLocaleData(localTk);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-EC' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
