import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliacionDeCarteraParaIpsComponent } from './conciliacion-de-cartera-para-ips.component';

describe('ConciliacionDeCarteraParaIpsComponent', () => {
  let component: ConciliacionDeCarteraParaIpsComponent;
  let fixture: ComponentFixture<ConciliacionDeCarteraParaIpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConciliacionDeCarteraParaIpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConciliacionDeCarteraParaIpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
