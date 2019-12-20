import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule,
  Injector
} from '@angular/core';
import {
  createCustomElement
} from '@angular/elements';
import {
  NotificationDialogComponent
} from 'projects/notification-elements/notification-dialog/notification-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotificationDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const notificationDialogCE = createCustomElement(NotificationDialogComponent, {
      injector: this.injector
    });
    customElements.define('notification-dialog', notificationDialogCE);
  }

}
