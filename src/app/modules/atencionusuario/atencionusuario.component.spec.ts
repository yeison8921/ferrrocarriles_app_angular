import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionusuarioComponent } from './atencionusuario.component';

describe('AtencionusuarioComponent', () => {
  let component: AtencionusuarioComponent;
  let fixture: ComponentFixture<AtencionusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtencionusuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtencionusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
