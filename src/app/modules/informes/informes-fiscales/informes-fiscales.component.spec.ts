import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesFiscalesComponent } from './informes-fiscales.component';

describe('InformesFiscalesComponent', () => {
  let component: InformesFiscalesComponent;
  let fixture: ComponentFixture<InformesFiscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesFiscalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesFiscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
