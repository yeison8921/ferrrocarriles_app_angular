import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-tramites',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './tramites.component.html',
  styleUrl: './tramites.component.css',
})
export class TramitesComponent {
  items: AcordionFiles[] = [];
  pagos: AcordionFiles[] = [];
  constructor() {
    this.items = [

      {
        id: 2,
        nombre: 'Aspirantes 2025',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA EDGARDO ARRIETA.pdf',
            url: '/assets/files/hojas_de_vida/ASPIRANTES 2025/HV Edgardo Arrieta.pdf',
          },
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA MARCO OROZCO.pdf',
            url: '/assets/files/hojas_de_vida/ASPIRANTES 2025/hojadevida.pdf',
          },
          
        ],
      },

      {
        id: 2,
        nombre: 'Aspirantes 2024',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA HIEDY YULI SANCHEZ GONZALEZ.pdf',
            url: '/assets/files/hojas_de_vida/ASPIRANTES 2024/HOJA DE VIDA HIEDY YULI SANCHEZ GONZALEZ.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA JOSE PUMAREJO.pdf',
            url: '/assets/files/hojas_de_vida/ASPIRANTES 2024/HOJA DE VIDA JOSE PUMAREJO.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA NICOLÁS ORTEGA MORAT.pdf',
            url: '/assets/files/hojas_de_vida/ASPIRANTES 2024/HOJA DE VIDA NICOLÁS ORTEGA MORAT.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA SIGEP ERNESTO ALBARRACÍN GÓMEZ.pdf',
            url: '/assets/files/hojas_de_vida/ASPIRANTES 2024/HOJA DE VIDA SIGEP ERNESTO ALBARRACÍN GÓMEZ.pdf',
          },
        ],
      },
     
      {
        id: 1,
        nombre: 'Aspirantes 2023',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA CARLOS CARMONA.pdf',
            url: '/assets/files/hojas_de_vida/ASPIRANTES 2023/HOJA DE VIDA CARLOS CARMONA.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA CARLOS TOVAR.pdf',
            url: '/assets/files/hojas_de_vida/ASPIRANTES 2023/HOJA DE VIDA CARLOS TOVAR.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'HV ANDREAALDANA2023.pdf',
            url: '/assets/files/hojas_de_vida/ASPIRANTES 2023/HV ANDREAALDANA2023.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'HV SAMIRA JULIETH ELJACH DURANTE - P.pdf',
            url: '/assets/files/hojas_de_vida/ASPIRANTES 2023/HV SAMIRA JULIETH ELJACH DURANTE - P.pdf',
          },
        ],
      },
     
      {
        id: 3,
        nombre: 'Documentos 2024',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'OFICIO VINCULACIÓN A TERCEROS (1).pdf',
            url: '/assets/files/hojas_de_vida/Documentos 2024/OFICIO VINCULACION A TERCEROS (1).pdf',
          },
        ],
      },
    ];
    this.pagos = [
       {
        id: 6,
        nombre: '2026',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '00 PORCENTAJE DEL INCREMENTO 2026.xlsx',
            url: '/assets/files/pagos_ips_y_salud/07. 2026/PORCENTAJE DEL INCREMENTO 2026.xlsx',
          },
          
        ],
      },

      {
        id: 6,
        nombre: '2025',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '00 PORCENTAJE DEL INCREMENTO 2025.xlsx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/00 PORCENTAJE DEL INCREMENTO 2025.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: '01 PAGOS SERVICIOS DE SALUD ENERO 2025.xlsx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/01 PAGOS SERVICIOS DE SALUD ENERO 2025.xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: '02 PAGOS SERVICIOS DE SALUD FEBRERO 2025.xlsx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/02 PAGOS SERVICIOS DE SALUD FEBRERO 2025.xlsx',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: '03. PAGOS SERVICIOS DE SALUD MARZO 2025.xlsx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/3. PAGOS SERVICIOS DE SALUD MARZO 2025.xlsx',
          },
          {
            id: 5,
            tipo: 'excel',
            nombre: '04. PAGOS SERVICIOS DE SALUD ABRIL.xlsx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/4. PAGOS SERVICIOS DE SALUD ABRIL.xlsx',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '05. PAGOS SERVICIOS DE SALUD MAYO.xlsx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/5. PAGOS SERVICIOS DE SALUD MAYO.xlsx',
          },
           {
            id: 6,
            tipo: 'excel',
            nombre: '06. PAGOS SERVICIOS DE SALUD JUNIO.xlsxx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/6. PAGOS SERVICIOS DE SALUD JUNIO.xlsx',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '07. PAGOS SERVICIOS DE SALUD JULIO.xlsx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/7. PAGOS SERVICIOS DE SALUD JULIO.xlsx',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '08. PAGOS SERVICIOS DE SALUD AGOSTO.xlsx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/8. PAGOS SERVICIOS DE SALUD AGOSTO.xlsx',
          },
            {
            id: 6,
            tipo: 'excel',
            nombre: '09. PAGOS SERVICIOS DE SALUD SEPTIEMBRE.xlsx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/8. PAGOS SERVICIOS DE SALUD AGOSTO.xlsx',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '10. PAGOS SERVICIOS DE SALUD OCTUBRE.xlsx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/10. PAGOS SERVICIOS DE SALUD OCTUBRE.xlsx',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '11. PAGOS SERVICIOS DE SALUD NOVIEMBRE.xlsx',
            url: '/assets/files/pagos_ips_y_salud/06. 2025/11. PAGOS SERVICIOS DE SALUD NOVIEMBRE.xls',
          }
        ],
      },
      {
        id: 5,
        nombre: '2024',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '01. PAGOS SERVICIOS DE SALUD ENERO 2024.xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/01. PAGOS SERVICIOS DE SALUD ENERO 2024.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: '02. PAGOS SERVICIOS DE SALUD FEBRERO 2024 .xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/02. PAGOS SERVICIOS DE SALUD FEBRERO 2024 .xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: '03. PAGOS SERVICIOS DE SALUD MARZO 2024 .xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/03. PAGOS SERVICIOS DE SALUD MARZO 2024 .xlsx',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: '04. PAGOS SERVICIOS DE SALUD ABRIL 2024 .xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/04. PAGOS SERVICIOS DE SALUD ABRIL 2024 .xlsx',
          },
          {
            id: 5,
            tipo: 'excel',
            nombre: '05. PAGOS SERVICIOS DE SALUD MAYO 2024 .xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/05. PAGOS SERVICIOS DE SALUD MAYO 2024 .xlsx',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '06. PAGOS SERVICIOS DE SALUD JUNIO 2024 -version 2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/06. PAGOS SERVICIOS DE SALUD JUNIO 2024 -version 2.xlsx',
          },
          {
            id: 7,
            tipo: 'excel',
            nombre: '07. PAGOS SERVICIOS DE SALUD JULIO 2024.xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/07. PAGOS SERVICIOS DE SALUD JULIO 2024.xlsx',
          },
          {
            id: 8,
            tipo: 'excel',
            nombre: '08. PAGOS SERVICIOS DE SALUD AGOSTO 2024.xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/08. PAGOS SERVICIOS DE SALUD AGOSTO 2024.xlsx',
          },
          {
            id: 9,
            tipo: 'excel',
            nombre: '09. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2024.xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/09. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2024.xlsx',
          },
          {
            id: 10,
            tipo: 'excel',
            nombre: '10. PAGOS SERVICIOS DE SALUD OCTUBRE 2024.xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/10. PAGOS SERVICIOS DE SALUD OCTUBRE 2024.xlsx',
          },
          {
            id: 11,
            tipo: 'excel',
            nombre:
              '11. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2024 version 2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/11. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2024 version 2.xlsx',
          },
          {
            id: 12,
            tipo: 'excel',
            nombre: '12. PAGOS SERVICIOS DE SALUD DICIEMBRE 2024.xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/12. PAGOS SERVICIOS DE SALUD DICIEMBRE 2024.xlsx',
          },
          {
            id: 13,
            tipo: 'excel',
            nombre: 'PORCENTAJE DEL INCREMENTO 2024.xlsx',
            url: '/assets/files/pagos_ips_y_salud/01. 2024/PORCENTAJE DEL INCREMENTO 2024.xlsx',
          },
        ],
      },
      {
        id: 4,
        nombre: '2023',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '01. PAGO SERVICIOS DE SALUD ENERO 2023.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/01. PAGO SERVICIOS DE SALUD ENERO 2023.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: '02. PAGO SERVICIOS DE SALUD ENERO 2023 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/02. PAGO SERVICIOS DE SALUD ENERO 2023 V2.xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: '03. PAGOS SERVICIOS DE SALUD FEBRERO 2023.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/03. PAGOS SERVICIOS DE SALUD FEBRERO 2023.xlsx',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: '04. PAGOS SERVICIOS DE SALUD FEBRERO 2023 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/04. PAGOS SERVICIOS DE SALUD FEBRERO 2023 V2.xlsx',
          },
          {
            id: 5,
            tipo: 'excel',
            nombre: '05. PAGOS SERVICIO DE SALUD MARZO 2023.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/05. PAGOS SERVICIO DE SALUD MARZO 2023.xlsx',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '06. PAGOS  SERVICIOS DE SALUD MARZO 2023 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/06. PAGOS  SERVICIOS DE SALUD MARZO 2023 V2.xlsx',
          },
          {
            id: 7,
            tipo: 'excel',
            nombre: '07. PAGOS SERVICIOS DE SALUD ABRIL 2023 V1.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/07. PAGOS SERVICIOS DE SALUD ABRIL 2023 V1.xlsx',
          },
          {
            id: 8,
            tipo: 'excel',
            nombre: '08. PAGOS SERVICIOS DE SALUD MAYO 2023 V1.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/08. PAGOS SERVICIOS DE SALUD MAYO 2023 V1.xlsx',
          },
          {
            id: 9,
            tipo: 'excel',
            nombre: '09. PAGOS SERVICIOS DE SALUD JUNIO 2023 V1.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/09. PAGOS SERVICIOS DE SALUD JUNIO 2023 V1.xlsx',
          },
          {
            id: 10,
            tipo: 'excel',
            nombre: '10. PAGOS SERVICIOS DE SALUD JULIO 2023 V1.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/10. PAGOS SERVICIOS DE SALUD JULIO 2023 V1.xlsx',
          },
          {
            id: 11,
            tipo: 'excel',
            nombre: '11. PAGOS SERVICIOS DE SALUD AGOSTO 2023 V1.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/11. PAGOS SERVICIOS DE SALUD AGOSTO 2023 V1.xlsx',
          },
          {
            id: 12,
            tipo: 'excel',
            nombre: '12. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2023 V1.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/12. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2023 V1.xlsx',
          },
          {
            id: 13,
            tipo: 'excel',
            nombre: '13. PAGOS SERVICIOS DE SALUD OCTUBRE 2023 V1.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/13. PAGOS SERVICIOS DE SALUD OCTUBRE 2023 V1.xlsx',
          },
          {
            id: 14,
            tipo: 'excel',
            nombre: '14. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2023 V1.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/14. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2023 V1.xlsx',
          },
          {
            id: 15,
            tipo: 'excel',
            nombre: '15. PAGOS SERVICIOS DE SALUD DICIEMBRE 2023 V1.xlsx',
            url: '/assets/files/pagos_ips_y_salud/02. 2023/15. PAGOS SERVICIOS DE SALUD DICIEMBRE 2023 V1.xlsx',
          },
        ],
      },
      {
        id: 3,
        nombre: '2022',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '01. PAGOS SALUD ENERO 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/01. PAGOS SALUD ENERO 2022.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: '02. PAGOS SERVICIOS DE SALUD ENERO 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/02. PAGOS SERVICIOS DE SALUD ENERO 2022 V2.xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: '03. PAGOS SALUD FEBRERO 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/03. PAGOS SALUD FEBRERO 2022.xlsx',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: '04. PAGOS SERVICIOS DE SALUD FEBRERO 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/04. PAGOS SERVICIOS DE SALUD FEBRERO 2022 V2.xlsx',
          },
          {
            id: 5,
            tipo: 'excel',
            nombre: '05. PAGOS SALUD MARZO 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/05. PAGOS SALUD MARZO 2022.xlsx',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '06. PAGOS SERVICIOS DE SALUD MARZO 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/06. PAGOS SERVICIOS DE SALUD MARZO 2022 V2.xlsx',
          },
          {
            id: 7,
            tipo: 'excel',
            nombre: '07. PAGOS SALUD ABRIL 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/07. PAGOS SALUD ABRIL 2022.xlsx',
          },
          {
            id: 8,
            tipo: 'excel',
            nombre: '08. PAGOS SERVICIOS DE SALUD ABRIL 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/08. PAGOS SERVICIOS DE SALUD ABRIL 2022 V2.xlsx',
          },
          {
            id: 9,
            tipo: 'excel',
            nombre: '09. CIRCULAR EXTERNA 202315 065 DE ABRIL 2023.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/09. CIRCULAR EXTERNA 202315 065 DE ABRIL 2023.xlsx',
          },
          {
            id: 10,
            tipo: 'excel',
            nombre: '10. PAGOS SALUD MAYO 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/10. PAGOS SALUD MAYO 2022.xlsx',
          },
          {
            id: 11,
            tipo: 'excel',
            nombre: '11. PAGOS SERVICIOS DE SALUD MAYO 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/11. PAGOS SERVICIOS DE SALUD MAYO 2022 V2.xlsx',
          },
          {
            id: 12,
            tipo: 'excel',
            nombre: '12. PAGOS SALUD JUNIO 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/12. PAGOS SALUD JUNIO 2022.xlsx',
          },
          {
            id: 13,
            tipo: 'excel',
            nombre: '13. PAGOS SERVICIOS DE SALUD JUNIO 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/13. PAGOS SERVICIOS DE SALUD JUNIO 2022 V2.xlsx',
          },
          {
            id: 14,
            tipo: 'excel',
            nombre: '14. PAGOS SALUD JULIO 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/14. PAGOS SALUD JULIO 2022.xlsx',
          },
          {
            id: 15,
            tipo: 'excel',
            nombre: '15. PAGOS SERVICIOS DE SALUD JULIO 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/15. PAGOS SERVICIOS DE SALUD JULIO 2022 V2.xlsx',
          },
          {
            id: 16,
            tipo: 'excel',
            nombre: '16. PAGOS SALUD AGOSTO 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/16. PAGOS SALUD AGOSTO 2022.xlsx',
          },
          {
            id: 17,
            tipo: 'excel',
            nombre: '17. PAGOS SERVICIOS DE SALUD AGOSTO 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/17. PAGOS SERVICIOS DE SALUD AGOSTO 2022 V2.xlsx',
          },
          {
            id: 18,
            tipo: 'excel',
            nombre: '18. PAGOS SALUD SEPTIEMBRE 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/18. PAGOS SALUD SEPTIEMBRE 2022.xlsx',
          },
          {
            id: 19,
            tipo: 'excel',
            nombre: '19. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/19. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2022 V2.xlsx',
          },
          {
            id: 20,
            tipo: 'excel',
            nombre: '20. PAGOS SALUD OCTUBRE 2022 (VF).xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/20. PAGOS SALUD OCTUBRE 2022 (VF).xlsx',
          },
          {
            id: 21,
            tipo: 'excel',
            nombre: '21. PAGOS SERVICIOS DE SALUD OCTUBRE 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/21. PAGOS SERVICIOS DE SALUD OCTUBRE 2022 V2.xlsx',
          },
          {
            id: 22,
            tipo: 'excel',
            nombre: '22. PAGOS SALUD NOVIEMBRE 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/22. PAGOS SALUD NOVIEMBRE 2022.xlsx',
          },
          {
            id: 23,
            tipo: 'excel',
            nombre: '23. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/23. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2022 V2.xlsx',
          },
          {
            id: 24,
            tipo: 'excel',
            nombre: '24. PAGOS SERVICIOS DE SALUD DICIEMBRE 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/24. PAGOS SERVICIOS DE SALUD DICIEMBRE 2022.xlsx',
          },
          {
            id: 25,
            tipo: 'excel',
            nombre: '25. PAGOS SERVICIOS DE SALUD DICIEMBRE 2022 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/03. 2022/25. PAGOS SERVICIOS DE SALUD DICIEMBRE 2022 V2.xlsx',
          },
        ],
      },
      {
        id: 2,
        nombre: '2021',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '01. PAGOS SALUD ENERO 2021 ok.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/01. PAGOS SALUD ENERO 2021 ok.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: '02. PAGOS SERVICIOS DE SALUD ENERO 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/02. PAGOS SERVICIOS DE SALUD ENERO 2021 V2.xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: '03. PAGOS SALUD FEBRERO 2021.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/03. PAGOS SALUD FEBRERO 2021.xlsx',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: '04. PAGOS SERVICIOS DE SALUD FEBRERO 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/04. PAGOS SERVICIOS DE SALUD FEBRERO 2021 V2.xlsx',
          },
          {
            id: 5,
            tipo: 'excel',
            nombre: '05. PAGOS SALUD MARZO 2021.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/05. PAGOS SALUD MARZO 2021.xlsx',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '06. PAGOS SERVICIOS DE SALUD MARZO 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/06. PAGOS SERVICIOS DE SALUD MARZO 2021 V2.xlsx',
          },
          {
            id: 7,
            tipo: 'excel',
            nombre: '07. PAGOS SALUD ABRIL 2021.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/07. PAGOS SALUD ABRIL 2021.xlsx',
          },
          {
            id: 8,
            tipo: 'excel',
            nombre: '08. PAGOS SERVICIOS DE SALUD ABRIL 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/08. PAGOS SERVICIOS DE SALUD ABRIL 2021 V2.xlsx',
          },
          {
            id: 9,
            tipo: 'excel',
            nombre: '09. PAGOS SALUD MAYO 2021.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/09. PAGOS SALUD MAYO 2021.xlsx',
          },
          {
            id: 10,
            tipo: 'excel',
            nombre: '10. PAGOS SERVICIOS DE SALUD MAYO 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/10. PAGOS SERVICIOS DE SALUD MAYO 2021 V2.xlsx',
          },
          {
            id: 11,
            tipo: 'excel',
            nombre: '11. PAGOS SALUD JUNIO 2021.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/11. PAGOS SALUD JUNIO 2021.xlsx',
          },
          {
            id: 12,
            tipo: 'excel',
            nombre: '12. PAGOS SERVICIOS DE SALUD JUNIO 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/12. PAGOS SERVICIOS DE SALUD JUNIO 2021 V2.xlsx',
          },
          {
            id: 13,
            tipo: 'excel',
            nombre: '13. PAGOS SALUD JULIO 2021.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/13. PAGOS SALUD JULIO 2021.xlsx',
          },
          {
            id: 14,
            tipo: 'excel',
            nombre: '14. PAGOS SERVICIOS DE SALUD JULIO 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/14. PAGOS SERVICIOS DE SALUD JULIO 2021 V2.xlsx',
          },
          {
            id: 15,
            tipo: 'excel',
            nombre: '15. PAGOS SALUD AGOSTO 2021.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/15. PAGOS SALUD AGOSTO 2021.xlsx',
          },
          {
            id: 16,
            tipo: 'excel',
            nombre: '16. PAGOS SERVICIOS DE SALUD AGOSTO 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/16. PAGOS SERVICIOS DE SALUD AGOSTO 2021 V2.xlsx',
          },
          {
            id: 17,
            tipo: 'excel',
            nombre: '17. PAGOS SALUD SEPTIEMBRE 2021.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/17. PAGOS SALUD SEPTIEMBRE 2021.xlsx',
          },
          {
            id: 18,
            tipo: 'excel',
            nombre: '18. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/18. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2021 V2.xlsx',
          },
          {
            id: 19,
            tipo: 'excel',
            nombre: '19. PAGOS SALUD OCTUBRE 2021.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/19. PAGOS SALUD OCTUBRE 2021.xlsx',
          },
          {
            id: 20,
            tipo: 'excel',
            nombre: '20. PAGOS SERVICIOS DE SALUD OCTUBRE 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/20. PAGOS SERVICIOS DE SALUD OCTUBRE 2021 V2.xlsx',
          },
          {
            id: 21,
            tipo: 'excel',
            nombre: '21. PAGOS SALUD NOVIEMBRE 2021 OK.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/21. PAGOS SALUD NOVIEMBRE 2021 OK.xlsx',
          },
          {
            id: 22,
            tipo: 'excel',
            nombre: '22. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/22. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2021 V2.xlsx',
          },
          {
            id: 23,
            tipo: 'excel',
            nombre: '23. PAGOS SALUD DICIEMBRE 2021.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/23. PAGOS SALUD DICIEMBRE 2021.xlsx',
          },
          {
            id: 24,
            tipo: 'excel',
            nombre: '24. PAGOS SERVICIOS DE SALUD DICIEMBRE 2021 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/04. 2021/24. PAGOS SERVICIOS DE SALUD DICIEMBRE 2021 V2.xlsx',
          },
        ],
      },
      {
        id: 1,
        nombre: '2020',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '01. PAGOS SALUD MARZO 2020.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/01. PAGOS SALUD MARZO 2020.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: '02. PAGOS SERVICIOS DE SALUD MARZO 2020 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/02. PAGOS SERVICIOS DE SALUD MARZO 2020 V2.xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: '03. PAGOS SALUD ABRIL 2020.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/03. PAGOS SALUD ABRIL 2020.xlsx',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: '04. PAGOS SERVICIOS DE SALUD ABRIL 2020 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/04. PAGOS SERVICIOS DE SALUD ABRIL 2020 V2.xlsx',
          },
          {
            id: 5,
            tipo: 'excel',
            nombre: '05. PAGOS SALUD MAYO 2020.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/05. PAGOS SALUD MAYO 2020.xlsx',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '06. PAGOS SERVICIOS DE SALUD MAYO 2020 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/06. PAGOS SERVICIOS DE SALUD MAYO 2020 V2.xlsx',
          },
          {
            id: 7,
            tipo: 'excel',
            nombre: '07. PAGOS SALUD JUNIO 2020.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/07. PAGOS SALUD JUNIO 2020.xlsx',
          },
          {
            id: 8,
            tipo: 'excel',
            nombre: '07. PAGOS SERVICIOS DE SALUD JUNIO 2020 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/07. PAGOS SERVICIOS DE SALUD JUNIO 2020 V2.xlsx',
          },
          {
            id: 9,
            tipo: 'excel',
            nombre: '09. PAGOS SALUD JULIO 2020.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/09. PAGOS SALUD JULIO 2020.xlsx',
          },
          {
            id: 10,
            tipo: 'excel',
            nombre: '10. PAGOS SERVICIOS DE SALUD JULIO 2020 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/10. PAGOS SERVICIOS DE SALUD JULIO 2020 V2.xlsx',
          },
          {
            id: 11,
            tipo: 'excel',
            nombre: '11. PAGOS SALUD AGOSTO 2022.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/11. PAGOS SALUD AGOSTO 2022.xlsx',
          },
          {
            id: 12,
            tipo: 'excel',
            nombre: '12. PAGOS SERVICIOS DE SALUD AGOSTO 2020 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/12. PAGOS SERVICIOS DE SALUD AGOSTO 2020 V2.xlsx',
          },
          {
            id: 13,
            tipo: 'excel',
            nombre: '13. PAGOS SALUD SEPTIEMBRE 2020.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/13. PAGOS SALUD SEPTIEMBRE 2020.xlsx',
          },
          {
            id: 14,
            tipo: 'excel',
            nombre: '14. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2020 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/14. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2020 V2.xlsx',
          },
          {
            id: 15,
            tipo: 'excel',
            nombre: '15. PAGOS SALUD OCTUBRE 2020.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/15. PAGOS SALUD OCTUBRE 2020.xlsx',
          },
          {
            id: 16,
            tipo: 'excel',
            nombre: '16. PAGOS SERVICIOS DE SALUD OCTUBRE 2020 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/16. PAGOS SERVICIOS DE SALUD OCTUBRE 2020 V2.xlsx',
          },
          {
            id: 17,
            tipo: 'excel',
            nombre: '17. PAGOS SALUD NOVIEMBRE 2020.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/17. PAGOS SALUD NOVIEMBRE 2020.xlsx',
          },
          {
            id: 18,
            tipo: 'excel',
            nombre: '18. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2020 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/18. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2020 V2.xlsx',
          },
          {
            id: 19,
            tipo: 'excel',
            nombre: '19. PAGOS SALUD DICIEMBRE 2020.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/19. PAGOS SALUD DICIEMBRE 2020.xlsx',
          },
          {
            id: 20,
            tipo: 'excel',
            nombre: '20. PAGOS SERVICIOS DE SALUD DICIEMBRE 2020 V2.xlsx',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/20. PAGOS SERVICIOS DE SALUD DICIEMBRE 2020 V2.xlsx',
          },
          {
            id: 21,
            tipo: 'pdf',
            nombre: 'CIRCULAR EXTERNA 008 DE 2018.pdf',
            url: '/assets/files/pagos_ips_y_salud/05. 2020/CIRCULAR EXTERNA 008 DE 2018.pdf',
          },
        ],
      },
    ];
  }
}
