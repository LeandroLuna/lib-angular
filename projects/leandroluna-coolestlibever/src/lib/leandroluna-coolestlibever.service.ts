import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coolest } from '../types/coolest.interface';
@Injectable({
  providedIn: 'root'
})
export class LeandrolunaCoolestlibeverService {

  constructor() { }

  getCoolest(): Observable<Coolest[]> {
    return of([
      {
        name: 'Leandro',
        age: 23,
        email: 'leandro@email.com'
      },
      {
        name: 'Luna',
        age: 23,
        email: 'luna@email.com'
      },
    ]);
  }
}
