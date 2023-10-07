import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Profile } from 'src/app/model/profile';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  profileData$: Observable<any>;

  constructor(private store: Store<any>) {
    // Select the profileData slice of state from the store
    this.profileData$ = this.store.select(state => state);
  }

  ngOnInit() {
    // You can subscribe to profileData$ here if you want to perform actions when the data changes
    this.profileData$.subscribe(profileData => {
      console.log(profileData); // Handle profileData changes
    });
  }
}