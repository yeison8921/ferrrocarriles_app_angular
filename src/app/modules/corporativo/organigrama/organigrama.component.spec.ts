import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramaComponent } from './organigrama.component';

describe('OrganigramaComponent', () => {
  let component: OrganigramaComponent;
  let fixture: ComponentFixture<OrganigramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganigramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganigramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
