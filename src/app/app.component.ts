import { createSelector } from '@ngrx/store/src/selector';
import { BUYCURSOR, INCREMENT } from './counter';
import { Observable } from 'rxjs/Rx';
import { createFeatureSelector, Store } from '@ngrx/store';
import { Component } from '@angular/core';

interface AppState {
  counter: number;
}

const counter = createFeatureSelector<number>('counter');
const canBuyCursor = createSelector(counter, c => c > 10);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<number>;
  canBuyCursor$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select('counter');
    this.canBuyCursor$ = store.select(canBuyCursor);
  }

  increment() {
    this.store.dispatch({type: INCREMENT});
  }

  buycursor() {
    this.store.dispatch({type: BUYCURSOR});
  }

}
