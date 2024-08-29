import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaSatisfaccionComponent } from '../atencion-al-usuario/encuesta-satisfaccion/encuesta-satisfaccion.component';
import { OfertasLaboralesComponent } from '../atencion-al-usuario/ofertas-laborales/ofertas-laborales.component';
import { GlosarioComponent } from '../atencion-al-usuario/glosario/glosario.component';

const routes: Routes = [
  {
    path: 'encuesta-de-satisfaccion/214',
    title: 'Encuesta de satisfacción',
    component: EncuestaSatisfaccionComponent,
  },
  {
    path: 'ofertas-laborales/153',
    title: 'Ofertas Laborales',
    component: OfertasLaboralesComponent,
  },
  {
    path: 'glosario/117',
    title: 'Glosario',
    component: GlosarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtencionUsuarioModule {}
