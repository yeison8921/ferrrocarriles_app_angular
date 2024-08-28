import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesContaduriaGeneralNacionComponent } from './informes-contaduria-general-nacion.component';

describe('InformesContaduriaGeneralNacionComponent', () => {
  let component: InformesContaduriaGeneralNacionComponent;
  let fixture: ComponentFixture<InformesContaduriaGeneralNacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesContaduriaGeneralNacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesContaduriaGeneralNacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
