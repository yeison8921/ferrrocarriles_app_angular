import { Component } from '@angular/core';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-formatos',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './formatos.component.html',
  styleUrl: './formatos.component.css'
}) 

export class FormatosComponent { 
  items: AcordionFiles[] = [];
  items2: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'Aspirantes 2023 ',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA CARLOS CARONA.pdf',
            url: '/informes/informes-de-empalme/71',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA CARLOS TOVAR.pdf',
            url: '/informes/indicadores-de-gestion/62',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'HV ANDREA ALDANA 2023.pdf',
            url: '/informes/informe-camara-de-representantes/187',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'HV SAMIRA JULIETH ELJACH DURANTE.pdf',
            url: '/informes/informes-fiscales/61',
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
            nombre: 'HOJA DE VIDA ERNESTO ALBARRACÍN.pdf',
            url: '/assets/files/.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA HIEDY YULI SANCHEZ GONZALEZ.pdf',
            url: '/assets/files/.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA JOSE PUMAREJO.pdf',
            url: '/assets/files/.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'HOJA DE VIDA NICOLÁS ORTEGA MORAT.pdf',
            url: '/assets/files/.pdf',
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
            nombre: 'OFICIO VINCULACIÓN A TERCEROS (1).pdf',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },        
        ],
      },
    ];


    this.items2 = [
      {
        id: 1,
        nombre: '01. 2024 ',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '01. PAGOS SERVICIOS DE SALUD ENERO 2024.xlsx',
            url: '/assets/files/.pdf',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: '02. PAGOS SERVICIOS DE SALUD FEBRERO 2024.xlsx',
            url: '/assets/files/.pdf',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: '03. PAGOS SERVICIOS DE SALUD MARZO 2024.xlsx',
            url: '/assets/files/.pdf',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: '04. PAGOS SERVICIOS DE SALUD ABRIL 2024.xlsx',
            url: '/assets/files/.pdf',
          },
          {
            id: 5,
            tipo: 'excel',
            nombre: '05. PAGOS SERVICIOS DE SALUD MAYO 2024.xlsx',
            url: '/assets/files/.pdf',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '06. PAGOS SERVICIOS DE SALUD JUNIO 2024.xlsx',
            url: '/assets/files/.pdf',
          },
          {
            id: 7,
            tipo: 'excel',
            nombre: '07. PAGOS SERVICIOS DE SALUD JULIO 2024.xlsx',
            url: '/assets/files/.pdf',
          },
          {
            id: 8,
            tipo: 'excel',
            nombre: '08. PAGOS SERVICIOS DE SALUD AGOSTO 2024.xlsx',
            url: '/assets/files/.pdf',
          },
          {
            id: 9,
            tipo: 'excel',
            nombre: '09. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2024.xlsx',
            url: '/assets/files/.pdf',
          },
          {
            id: 10,
            tipo: 'excel',
            nombre: 'PORCENTAJE DEL INCREMENTO 2024.xlsx',
            url: '/assets/files/.pdf',
          },
           
        ],
      },
      {
        id: 2,
        nombre: '02. 2023',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. PAGO SERVICIOS DE SALUD ENERO 2023.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02. PAGO SERVICIOS DE SALUD ENERO 2023 V2.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '03. PAGO SERVICIOS DE SALUD FEBRERO 2023.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04. PAGO SERVICIOS DE SALUD FEBRERO 2023 V2.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '05. PAGO SERVICIOS DE SALUD MARZO 2023.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '06. PAGO SERVICIOS DE SALUD MARZO 2023 V2.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: '07. PAGO SERVICIOS DE SALUD ABRIL 2023 V1.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: '08. PAGO SERVICIOS DE SALUD MAYO 2023 V1.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: '09. PAGO SERVICIOS DE SALUD JUNIO 2023 V1.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre: '10. PAGO SERVICIOS DE SALUD JULIO 2023 V1.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre: '11. PAGO SERVICIOS DE SALUD AGOSTO 2023 V1.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre: '12. PAGO SERVICIOS DE SALUD SEPTIEMBRE 2023 V1.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 13,
            tipo: 'pdf',
            nombre: '13. PAGO SERVICIOS DE SALUD OCTUBRE 2023 V1.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 14,
            tipo: 'pdf',
            nombre: '14. PAGO SERVICIOS DE SALUD NOVIEMBRE 2023 V1.xlsx',
            url: '/assets/files.pdf',
          },
          {
            id: 15,
            tipo: 'pdf',
            nombre: '15. PAGO SERVICIOS DE SALUD DICIEMBRE 2023 V1.xlsx',
            url: '/assets/files.pdf',
          }, 
        ],
      },
      {
        id: 3,
        nombre: '03. 2022',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. PAGOS SALUD ENERO 2022.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: '02. PAGOS SERVICIOS DE SALUD ENERO 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: '03. PAGOS SALUD FEBRERO 2022.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: '04. PAGOS SERVICIOS DE SALUD FEBRERO 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 5,
            tipo: 'excel',
            nombre: '05. PAGOS SALUD MARZO 2022.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '06. PAGOS SERVICIOS DE SALUD MARZO 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 7,
            tipo: 'excel',
            nombre: '07. PAGOS SALUD ABRIL 2022.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 8,
            tipo: 'excel',
            nombre: '08. PAGOS SERVICIOS DE SALUD ABRIL 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 9,
            tipo: 'excel',
            nombre: '09. CIRCULAR EXTERNA 202315 065 DE ABRIL 2023.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 10,
            tipo: 'excel',
            nombre: '10. PAGOS SALUD MAYO 2022.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 11,
            tipo: 'excel',
            nombre: '11. PAGOS SERVICIOS DE SALUD MAYO 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 12,
            tipo: 'excel',
            nombre: '12. PAGOS SALUD JUNIO 2022.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 13,
            tipo: 'excel',
            nombre: '13. PAGOS SERVICIOS DE SALUD JUNIO 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 14,
            tipo: 'excel',
            nombre: '14. PAGOS SALUD JULIO 2022.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 15,
            tipo: 'excel',
            nombre: '15. PAGOS SERVICIOS DE SALUD JULIO 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 16,
            tipo: 'excel',
            nombre: '16. PAGOS SALUD AGOSTO 2022.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 17,
            tipo: 'excel',
            nombre: '17. PAGOS SERVICIOS DE SALUD AGOSTO 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 18,
            tipo: 'excel',
            nombre: '18. PAGOS SALUD SEPTIEMBRE 2022.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 19,
            tipo: 'excel',
            nombre: '19. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 20,
            tipo: 'excel',
            nombre: '20. PAGOS SALUD OCTUBRE 2022 (VF).xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 21,
            tipo: 'excel',
            nombre: '21. PAGOS SERVICIOS DE SALUD OCTUBRE 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 22,
            tipo: 'excel',
            nombre: '22. PAGOS SALUD NOVIEMBRE 2022.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {        
            id: 23,
            tipo: 'excel',
            nombre: '23. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {  
            id: 24,
            tipo: 'excel',
            nombre: '24. PAGOS SERVICIOS DE SALUD DICIEMBRE 2022.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 25,
            tipo: 'pdf',
            nombre: '25. PAGOS SERVICIOS DE SALUD DICIEMBRE 2022 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },      
        ],
      },
      {
        id: 4,
        nombre: '04. 2021',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. PAGOS SALUD ENERO 2021 ok.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: '02. PAGOS SERVICIOS DE SALUD ENERO 2021 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: '03. PAGOS SALUD FEBRERO 2021.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: '04. PAGOS SERVICIOS DE SALUD FEBRERO 2021 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 5,
            tipo: 'excel',
            nombre: '05. PAGOS SALUD MARZO 2021.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '06. PAGOS SERVICIOS DE SALUD MARZO 2021 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 7,
            tipo: 'excel',
            nombre: '07. PAGOS SALUD ABRIL 2021.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 8,
            tipo: 'excel',
            nombre: '08. PAGOS SERVICIOS DE SALUD ABRIL 2021 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 9,
            tipo: 'excel',
            nombre: '09. PAGOS SALUD MAYO 2021.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 10,
            tipo: 'excel',
            nombre: '10. PAGOS SERVICIOS DE SALUD MAYO 2021 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 11,
            tipo: 'excel',
            nombre: '11. PAGOS SALUD JUNIO 2021.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 12,
            tipo: 'excel',
            nombre: '12. PAGOS SERVICIOS DE SALUD JUNIO 2021 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 13,
            tipo: 'excel',
            nombre: '13. PAGOS SALUD JUNIO 2021.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 14,
            tipo: 'excel',
            nombre: '14. PAGOS SERVICIOS SALUD JULIO 2021.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 15,
            tipo: 'excel',
            nombre: '15. PAGOS SALUD AGOSTO 2021.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 16,
            tipo: 'excel',
            nombre: '16. PAGOS SALUD AGOSTO 2021 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 17,
            tipo: 'excel',
            nombre: '17. PAGOS SALUD SEPTIEMBRE V1.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 18,
            tipo: 'excel',
            nombre: '18. PAGOS SERVICIOS DE DALUD SEPTIEMBRE 2021 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 19,
            tipo: 'excel',
            nombre: '19. PAGOS SALUD OCTUBRE 2021.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 20,
            tipo: 'excel',
            nombre: '20. PAGOS SERVICIOS SALUD OCTUBRE 2021 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 21,
            tipo: 'excel',
            nombre: '21. PAGOS SALUD NOVIEMBRE 2021 OK.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 22,
            tipo: 'excel',
            nombre: '22. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2021 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {        
            id: 23,
            tipo: 'excel',
            nombre: '23. PAGOS SALUD DICIEMBRE 2021.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {  
            id: 24,
            tipo: 'excel',
            nombre: '24. PAGOS SERVICIOS DE SALUD DICIEMBRE 2021 V2.xlsx',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },   
        ],
      },
      {
        id: 5,
        nombre: '05. 2020',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '01. PAGOS SALUD MARZO 2020.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: '02. PAGOS SERVICIOS DE SALUD MARZO 2020 V2.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: '03. PAGOS SALUD ABRIL 2020.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: '04. PAGOS SERVICIOS DE SALUD ABRIL 2020 V2.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 5,
            tipo: 'excel',
            nombre: '05. PAGOS SALUD MAYO 2020.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '06. PAGOS SERVICIOS DE SALUD MAYO 2020 V2.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 7,
            tipo: 'excel',
            nombre: '07. PAGOS SALUD JUNIO 2020.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 8,
            tipo: 'excel',
            nombre: '08. PAGOS SERVICIOS DE SALUD JUNIO 2020 V2.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 9,
            tipo: 'excel',
            nombre: '09. PAGOS SALUD JULIO 2020.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 10,
            tipo: 'excel',
            nombre: '10. PAGOS SERVICIOS DE SALUD JULIO 2020 V2.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 11,
            tipo: 'excel',
            nombre: '11. PAGOS SALUD AGOSTO 2022.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 12,
            tipo: 'excel',
            nombre: '12. PAGOS SERVICIOS DE SALUD AGOSTO 2020 V2.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 13,
            tipo: 'excel',
            nombre: '13. PAGOS SALUD SEPTIEMBRE 2020.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 14,
            tipo: 'excel',
            nombre: '14. PAGOS SERVICIOS DE SALUD SEPTIEMBRE 2020 V2.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 15,
            tipo: 'excel',
            nombre: '15. PAGOS SALUD OCTUBRE 2020.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 16,
            tipo: 'excel',
            nombre: '16. PAGOS SERVICIOS DE SALUD OCTUBRE 2020 V2.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 17,
            tipo: 'excel',
            nombre: '17. PAGOS SALUD NOVIEMBRE 2020.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 18,
            tipo: 'excel',
            nombre: '18. PAGOS SERVICIOS DE SALUD NOVIEMBRE 2020 V2.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 19,
            tipo: 'excel',
            nombre: '19. PAGOS SALUD DICIEMBRE 2020.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 20,
            tipo: 'excel',
            nombre: '20. PAGOS SERVICIOS DE SALUD DICIEMBRE 2020 V2.xlsx',
            url: '/assets/files/tramites-servicios/.pdf',
          },
          {
            id: 21,
            tipo: 'excel',
            nombre: 'CIRCULAR EXTERNA 008 DE 2018.pdf',
            url: '/assets/files/tramites-servicios/.pdf',
          },           
        ],
      },
    ];
  }
}
