import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { compose, not, isNil } from 'ramda';
import { Dog, dogs } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor() { }

  readonly dogsLoading$ = new BehaviorSubject<boolean>(true);
  readonly dogs$ = of(dogs).pipe(
    filter(
      compose(not, isNil)
    ),
    tap(() => this.dogsLoading$.next(false))
  )
}
