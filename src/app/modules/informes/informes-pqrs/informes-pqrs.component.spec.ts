import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesPqrsComponent } from './informes-pqrs.component';

describe('InformesPqrsComponent', () => {
  let component: InformesPqrsComponent;
  let fixture: ComponentFixture<InformesPqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesPqrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
