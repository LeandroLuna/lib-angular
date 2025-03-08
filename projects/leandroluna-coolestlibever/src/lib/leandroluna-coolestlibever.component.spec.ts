import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeandrolunaCoolestlibeverComponent } from './leandroluna-coolestlibever.component';

describe('LeandrolunaCoolestlibeverComponent', () => {
  let component: LeandrolunaCoolestlibeverComponent;
  let fixture: ComponentFixture<LeandrolunaCoolestlibeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeandrolunaCoolestlibeverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeandrolunaCoolestlibeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
