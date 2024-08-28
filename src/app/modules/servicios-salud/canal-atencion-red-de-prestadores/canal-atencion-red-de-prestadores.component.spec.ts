import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalAtencionRedDePrestadoresComponent } from './canal-atencion-red-de-prestadores.component';

describe('CanalAtencionRedDePrestadoresComponent', () => {
  let component: CanalAtencionRedDePrestadoresComponent;
  let fixture: ComponentFixture<CanalAtencionRedDePrestadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanalAtencionRedDePrestadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanalAtencionRedDePrestadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
