import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesAnualesComponent } from './informes-anuales.component';

describe('InformesAnualesComponent', () => {
  let component: InformesAnualesComponent;
  let fixture: ComponentFixture<InformesAnualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesAnualesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesAnualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
