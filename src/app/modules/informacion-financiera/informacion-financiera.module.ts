import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadosFinancierosComponent } from './estados-financieros/estados-financieros.component';
import { InformacionFinancieraComponent } from './informacion-financiera/informacion-financiera.component';

const routes: Routes = [
  {
    path: 'estados-financieros/156',
    component: EstadosFinancierosComponent,
  },

  {
    path: 'informacion-financiera/89',
    component: InformacionFinancieraComponent
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionFinancieraModule {}
