import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenciaDevueltaComponent } from './correspondencia-devuelta.component';

describe('CorrespondenciaDevueltaComponent', () => {
  let component: CorrespondenciaDevueltaComponent;
  let fixture: ComponentFixture<CorrespondenciaDevueltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrespondenciaDevueltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrespondenciaDevueltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
