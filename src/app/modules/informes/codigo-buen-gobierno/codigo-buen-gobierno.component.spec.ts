import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoBuenGobiernoComponent } from './codigo-buen-gobierno.component';

describe('CodigoBuenGobiernoComponent', () => {
  let component: CodigoBuenGobiernoComponent;
  let fixture: ComponentFixture<CodigoBuenGobiernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodigoBuenGobiernoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoBuenGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
