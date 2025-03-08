import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coolest } from '../types/coolest.interface';
import { LeandrolunaCoolestlibeverService } from './leandroluna-coolestlibever.service';

@Component({
  selector: 'leandroluna-coolestlibever',
  imports: [CommonModule],
  template: `
    <p>
      The coolest people in the world are:
    </p>
    <ul>
      <li *ngFor="let coolest of coolest">
        {{ coolest.name }} - {{ coolest.age }} - {{ coolest.email }}
      </li>
    </ul>
  `,
  styles: ``
})
export class LeandrolunaCoolestlibeverComponent {
  coolest: Coolest[] = [];

  constructor(private coolestService: LeandrolunaCoolestlibeverService) {
    this.coolestService.getCoolest().subscribe((coolest) => {
      this.coolest = coolest;
    });
  }
}
