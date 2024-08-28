import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionUsuarioComponent } from '../atencion-al-usuario/atencion-al-usuario.component';

describe('AtencionUsuarioComponent', () => {
  let component: AtencionUsuarioComponent;
  let fixture: ComponentFixture<AtencionUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtencionUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtencionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
