import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaPromocionPrevencionComponent } from './programa-promocion-prevencion.component';

describe('ProgramaPromocionPrevencionComponent', () => {
  let component: ProgramaPromocionPrevencionComponent;
  let fixture: ComponentFixture<ProgramaPromocionPrevencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaPromocionPrevencionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaPromocionPrevencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
