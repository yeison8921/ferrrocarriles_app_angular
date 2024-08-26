import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeOficinaControlInternoComponent } from './informe-oficina-control-interno.component';

describe('InformeOficinaControlInternoComponent', () => {
  let component: InformeOficinaControlInternoComponent;
  let fixture: ComponentFixture<InformeOficinaControlInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeOficinaControlInternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeOficinaControlInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
