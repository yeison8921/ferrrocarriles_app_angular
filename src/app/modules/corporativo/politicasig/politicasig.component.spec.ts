import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasigComponent } from './politicasig.component';

describe('PoliticasigComponent', () => {
  let component: PoliticasigComponent;
  let fixture: ComponentFixture<PoliticasigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticasigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticasigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
