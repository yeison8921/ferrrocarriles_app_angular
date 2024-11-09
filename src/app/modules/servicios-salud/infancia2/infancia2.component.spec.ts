import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infancia2Component } from './infancia2.component';

describe('Infancia2Component', () => {
  let component: Infancia2Component;
  let fixture: ComponentFixture<Infancia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infancia2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infancia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
