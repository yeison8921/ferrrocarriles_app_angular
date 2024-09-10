import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDePublicacionesComponent } from './registro-de-publicaciones.component';

describe('RegistroDePublicacionesComponent', () => {
  let component: RegistroDePublicacionesComponent;
  let fixture: ComponentFixture<RegistroDePublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroDePublicacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDePublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
