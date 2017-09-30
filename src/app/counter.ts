import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const BUYCURSOR = 'BUYCURSOR';
export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case BUYCURSOR:
      return state - 3;
    default:
      return state;
  }
}
