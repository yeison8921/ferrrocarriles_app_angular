import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionContableFinancieraComponent } from './informacion-contable-financiera.component';

describe('InformacionContableFinancieraComponent', () => {
  let component: InformacionContableFinancieraComponent;
  let fixture: ComponentFixture<InformacionContableFinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionContableFinancieraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionContableFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
