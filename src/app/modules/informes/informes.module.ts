import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresGestionComponent } from './indicadores-gestion/indicadores-gestion.component';
import { InformesEmpalmeComponent } from './informes-empalme/informes-empalme.component';
import { InformesAnualesComponent } from './informes-anuales/informes-anuales.component';
import { MemoriasCongresoComponent } from './memorias-congreso/memorias-congreso.component';
import { InformesPqrsComponent } from './informes-pqrs/informes-pqrs.component';
import { InformeMedicionSatisfaccionCiudadanoComponent } from './informe-medicion-satisfaccion-ciudadano/informe-medicion-satisfaccion-ciudadano.component';
import { InformesDefensaJudicialComponent } from './informes-defensa-judicial/informes-defensa-judicial.component';
import { InformeConsolidadoComponent } from './informe-consolidado/informe-consolidado.component';
import { InformeOficinaControlInternoComponent } from './informe-oficina-control-interno/informe-oficina-control-interno.component';

const routes: Routes = [
  {
    path: 'informes-de-empalme/71',
    component: InformesEmpalmeComponent,
  },
  {
    path: 'informes-anuales/59',
    component: InformesAnualesComponent,
  },
  {
    path: 'indicadores-de-gestion/62',
    component: IndicadoresGestionComponent,
  },
  {
    path: 'memorias-al-congreso-de-la-republica/66',
    component: MemoriasCongresoComponent,
  },
  {
    path: 'informes-PQRS/180',
    component: InformesPqrsComponent,
  },
  {
    path: 'informes-de-medicion-de-la-satistfaccion-al-ciudadano/188',
    component: InformeMedicionSatisfaccionCiudadanoComponent,
  },
  {
    path: 'informes-de-la-defensa-judicial/70',
    component: InformesDefensaJudicialComponent,
  },
  {
    path: 'informes-consolidado-gestion-prestaciones-economicas/72',
    component: InformeConsolidadoComponent,
  },
  {
    path: 'informes-oficina-de-control-interno/186',
    component: InformeOficinaControlInternoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformesModule {}
