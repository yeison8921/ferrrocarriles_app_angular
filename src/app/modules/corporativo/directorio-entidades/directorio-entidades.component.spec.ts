import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioEntidadesComponent } from './directorio-entidades.component';

describe('DirectorioEntidadesComponent', () => {
  let component: DirectorioEntidadesComponent;
  let fixture: ComponentFixture<DirectorioEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorioEntidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorioEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
