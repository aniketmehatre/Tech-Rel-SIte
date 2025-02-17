import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor() { }
  private scrollSubject = new Subject<string>();

  scroll$ = this.scrollSubject.asObservable();

  scrollTo(elementId: string): void {
    this.scrollSubject.next(elementId);
  }
}
