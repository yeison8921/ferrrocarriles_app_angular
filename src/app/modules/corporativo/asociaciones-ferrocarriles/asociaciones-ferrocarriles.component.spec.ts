import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociacionesFerrocarrilesComponent } from './asociaciones-ferrocarriles.component';

describe('AsociacionesFerrocarrilesComponent', () => {
  let component: AsociacionesFerrocarrilesComponent;
  let fixture: ComponentFixture<AsociacionesFerrocarrilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsociacionesFerrocarrilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsociacionesFerrocarrilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
