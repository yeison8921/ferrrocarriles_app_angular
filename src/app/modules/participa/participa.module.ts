import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCiudadanaComponent } from './consulta-ciudadana/consulta-ciudadana.component';
import { PqrComponent } from './pqr/pqr.component';
import { ParticipacionYPresupuestoParticipativoComponent } from './participacion-y-presupuesto-participativo/participacion-y-presupuesto-participativo.component';
import { ColaboracionEInnovacionComponent } from './colaboracion-e-innovacion/colaboracion-e-innovacion.component';
import { RendicionDeCuentasComponent } from './rendicion-de-cuentas/rendicion-de-cuentas.component';
import { ControlSocialComponent } from './control-social/control-social.component';

const routes: Routes = [

  {
    path: 'pqr/222',
    title: 'pqr',
    component: PqrComponent, 
  },
  {
    path: 'participacion-y-presupuesto-participativo/226',
    title: 'Planeación y/o presupuesto participativo',
    component: ParticipacionYPresupuestoParticipativoComponent, 
  },
  {
    path: 'consulta-ciudadana/227',
    title: 'Consulta ciudadana',
    component: ConsultaCiudadanaComponent,    
  },
  {
    path: 'colaboracion-e-innovacion/228',
    title: 'Colaboración e innovación abierta con la participación ciudadana',
    component: ColaboracionEInnovacionComponent, 
  },
  {
    path: 'redicion-de-cuentas/229',
    title: 'Rendición de Cuentas',
    component: RendicionDeCuentasComponent, 
  },
  {
    path: 'control-social/230',
    title: 'Control Social',
    component: ControlSocialComponent, 
  }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipaModule {}
