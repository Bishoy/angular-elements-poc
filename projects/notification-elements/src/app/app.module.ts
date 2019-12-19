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

@NgModule({
  declarations: [
    NotificationDialogComponent
  ],
  imports: [
    BrowserModule
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
