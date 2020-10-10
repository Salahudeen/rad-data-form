import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'rad-data-form-issue';

  isView = true;
  isViewSubject = new BehaviorSubject<boolean>(this.isView);
  isView$ = this.isViewSubject.asObservable();

  toggle() {
    this.isView = !this.isView;
    console.log(this.isView);
    this.isViewSubject.next(this.isView);
  }
}
