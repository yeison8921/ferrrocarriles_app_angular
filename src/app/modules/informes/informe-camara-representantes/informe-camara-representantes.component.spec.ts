import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeCamaraRepresentantesComponent } from './informe-camara-representantes.component';

describe('InformeCamaraRepresentantesComponent', () => {
  let component: InformeCamaraRepresentantesComponent;
  let fixture: ComponentFixture<InformeCamaraRepresentantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeCamaraRepresentantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeCamaraRepresentantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
