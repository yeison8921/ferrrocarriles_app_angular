import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonNotificacionesJudicialesComponent } from './buzon-notificaciones-judiciales.component';

describe('BuzonNotificacionesJudicialesComponent', () => {
  let component: BuzonNotificacionesJudicialesComponent;
  let fixture: ComponentFixture<BuzonNotificacionesJudicialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuzonNotificacionesJudicialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuzonNotificacionesJudicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
