import {
  Component,
  OnInit
} from '@angular/core';
import {
  timer, Observable
} from 'rxjs';
import {
  map, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {

  count: Observable<number> = timer(0,1000);
  constructor() { }

  ngOnInit() { }

}
