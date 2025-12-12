import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Certificadodepension } from './certificadodepension';

describe('Certificadodepension', () => {
  let component: Certificadodepension;
  let fixture: ComponentFixture<Certificadodepension>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certificadodepension]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Certificadodepension);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
