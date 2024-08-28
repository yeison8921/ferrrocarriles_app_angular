import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionFinancieraContaduriaGeneralDeLaNacionComponent } from './informacion-financiera-contaduria-general-de-la-nacion.component';

describe('InformacionFinancieraContaduriaGeneralDeLaNacionComponent', () => {
  let component: InformacionFinancieraContaduriaGeneralDeLaNacionComponent;
  let fixture: ComponentFixture<InformacionFinancieraContaduriaGeneralDeLaNacionComponent>;

  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      imports: [InformacionFinancieraContaduriaGeneralDeLaNacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionFinancieraContaduriaGeneralDeLaNacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
