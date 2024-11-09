import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalInteraccionComponent } from './canal-interaccion.component';

describe('CanalInteraccionComponent', () => {
  let component: CanalInteraccionComponent;
  let fixture: ComponentFixture<CanalInteraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanalInteraccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanalInteraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
