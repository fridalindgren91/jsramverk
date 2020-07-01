import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kmom02Component } from './kmom02.component';

describe('Kmom01Component', () => {
  let component: Kmom02Component;
  let fixture: ComponentFixture<Kmom02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kmom02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kmom02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
