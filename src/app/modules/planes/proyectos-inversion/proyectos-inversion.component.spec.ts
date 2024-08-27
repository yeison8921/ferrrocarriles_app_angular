import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosInversionComponent } from './proyectos-inversion.component';

describe('ProyectosInversionComponent', () => {
  let component: ProyectosInversionComponent;
  let fixture: ComponentFixture<ProyectosInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosInversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
