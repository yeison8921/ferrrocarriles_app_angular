import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosFinancierosComponent } from './estados-financieros/estados-financieros.component';
import { InformacionFinancieraComponent } from './informacion-financiera/informacion-financiera.component';
import { InformacionFinancieraContaduriaGeneralDeLaNacionComponent } from './informacion-financiera-contaduria-general-de-la-nacion/informacion-financiera-contaduria-general-de-la-nacion.component';
import { InformacionFinancieraSuperintendenciaNacionalDeSaludComponent } from './informacion-financiera-superintendencia-nacional-de-salud/informacion-financiera-superintendencia-nacional-de-salud.component';
import { ConciliacionDeCarteraParaIpsComponent } from './conciliacion-de-cartera-para-ips/conciliacion-de-cartera-para-ips.component';

const routes: Routes = [
  {
    path: 'estados-financieros/156',
    title: 'Estados financieros',
    component: EstadosFinancierosComponent,
  },

  {
    path: 'informacion-financiera/89',
    title: 'Información Presupuestal y Financiera',
    component: InformacionFinancieraComponent,
  },

  {
    path: 'informacion-financiera-contaduria-general-de-la-nacion/208',
    title: 'Información Financiera Contaduría General de la Nación',
    component: InformacionFinancieraContaduriaGeneralDeLaNacionComponent,
  },

  {
    path: 'informacion-financiera-superintendencia-nacional-de-salud/207',
    title: 'Información financiera contaduría general de la nación',
    component: InformacionFinancieraSuperintendenciaNacionalDeSaludComponent,
  },

  {
    path: 'conciliacion-de-cartera-para-ips/239',
    title: 'Conciliación de cartera para IPS',
    component: ConciliacionDeCarteraParaIpsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionFinancieraModule {}
