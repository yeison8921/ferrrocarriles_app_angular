import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesDefensaJudicialComponent } from './informes-defensa-judicial.component';

describe('InformesDefensaJudicialComponent', () => {
  let component: InformesDefensaJudicialComponent;
  let fixture: ComponentFixture<InformesDefensaJudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesDefensaJudicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesDefensaJudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
