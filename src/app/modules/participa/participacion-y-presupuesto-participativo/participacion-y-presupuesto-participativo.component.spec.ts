import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacionYPresupuestoParticipativoComponent } from './participacion-y-presupuesto-participativo.component';

describe('ParticipacionYPresupuestoParticipativoComponent', () => {
  let component: ParticipacionYPresupuestoParticipativoComponent;
  let fixture: ComponentFixture<ParticipacionYPresupuestoParticipativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipacionYPresupuestoParticipativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipacionYPresupuestoParticipativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
