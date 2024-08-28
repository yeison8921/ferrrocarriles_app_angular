import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendicionDeCuentasComponent } from './rendicion-de-cuentas.component';

describe('RendicionDeCuentasComponent', () => {
  let component: RendicionDeCuentasComponent;
  let fixture: ComponentFixture<RendicionDeCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendicionDeCuentasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendicionDeCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
