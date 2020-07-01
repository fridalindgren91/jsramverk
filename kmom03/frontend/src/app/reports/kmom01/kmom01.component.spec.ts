import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kmom01Component } from './kmom01.component';

describe('Kmom01Component', () => {
  let component: Kmom01Component;
  let fixture: ComponentFixture<Kmom01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kmom01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kmom01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
