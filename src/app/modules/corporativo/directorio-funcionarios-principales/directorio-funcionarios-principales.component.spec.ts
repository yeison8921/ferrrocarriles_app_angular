import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioFuncionariosPrincipalesComponent } from './directorio-funcionarios-principales.component';

describe('DirectorioFuncionariosPrincipalesComponent', () => {
  let component: DirectorioFuncionariosPrincipalesComponent;
  let fixture: ComponentFixture<DirectorioFuncionariosPrincipalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorioFuncionariosPrincipalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorioFuncionariosPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
