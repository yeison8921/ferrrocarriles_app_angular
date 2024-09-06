import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioDeContratistasFpsComponent } from './directorio-de-contratistas-fps.component';

describe('DirectorioDeContratistasFpsComponent', () => {
  let component: DirectorioDeContratistasFpsComponent;
  let fixture: ComponentFixture<DirectorioDeContratistasFpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorioDeContratistasFpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorioDeContratistasFpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
