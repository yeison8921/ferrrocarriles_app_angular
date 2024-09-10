import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadesRegulanComponent } from './entidades-regulan.component';

describe('EntidadesRegulanComponent', () => {
  let component: EntidadesRegulanComponent;
  let fixture: ComponentFixture<EntidadesRegulanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntidadesRegulanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntidadesRegulanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
