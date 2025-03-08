import { Component, inject, OnInit } from '@angular/core';
import { LeandrolunaCoolestlibeverComponent, LeandrolunaCoolestlibeverService, Coolest } from 'leandroluna-coolestlibever';

@Component({
  selector: 'app-root',
  imports: [LeandrolunaCoolestlibeverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  coolestlibeverService =  inject(LeandrolunaCoolestlibeverService);
  coolest: Coolest[] = [];

  ngOnInit() {
    this.coolestlibeverService.getCoolest().subscribe((coolest) => {
      this.coolest = coolest;
    });
    console.log('Coolest data', this.coolest);
  }
}