import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-conciliacion-de-cartera-para-ips',
  standalone: true,
  imports: [NgbAccordionModule,
    NgFor],
  templateUrl: './conciliacion-de-cartera-para-ips.component.html',
  styleUrl: './conciliacion-de-cartera-para-ips.component.css'
})
export class ConciliacionDeCarteraParaIpsComponent { 

  files: AcordionAnidadoFiles[];

  constructor(){
    this.files = [


      {
        "id": 1,
        "nombre": "REPORTES 2023",
        "acordion": [
          {
            "id": 1,
            "nombre": "Cronograma de Conciliación y Depuración",
            "files": []
          },
          {
            "id": 2,
            "nombre": "Avance proceso de conciliación y Depuración",
            "files": [      
              {
                "id": 5,
                "tipo": "excel",
                "nombre": "Reporte FT022 01012023 a 31012023.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/01. Reportes 2023/02 Avance proceso de conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01012023 a 31012023.xlsx"
              },
              {
                "id": 6,
                "tipo": "excel",
                "nombre": "Reporte FT022 01022023 a 28022023.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/01. Reportes 2023/02 Avance proceso de conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01022023 a 28022023.xlsx"
              },
              {
                "id": 7,
                "tipo": "excel",
                "nombre": "Reporte FT022 01032023 a 31032023.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/01. Reportes 2023/02 Avance proceso de conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01032023 a 31032023.xlsx"
              },
              {
                "id": 8,
                "tipo": "pdf",
                "nombre": "Reporte FT022 01042023 a 30042023.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/01. Reportes 2023/02 Avance proceso de conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01042023 a 30042023.xlsx"
              }
            ]
          },
          {
            "id": 3,
            "nombre": "Link de Consulta de Proceso",
            "files": [
              {
                "id": 9,
                "tipo": "excel",
                "nombre": "8001128062012023FT023.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/01. Reportes 2023/03 Link de Consulta de Proceso/8001128062012023FT023.xlsx"
              },
              {
                "id": 10,
                "tipo": "pdf",
                "nombre": "8001128062022023FT023.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/01. Reportes 2023/03 Link de Consulta de Proceso/8001128062022023FT023.xlsx"
              },
              {
                "id": 11,
                "tipo": "pdf",
                "nombre": "8001128062032023FT023.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/01. Reportes 2023/03 Link de Consulta de Proceso/8001128062032023FT023.xlsx"
              },
              {
                "id": 12,
                "tipo": "pdf",
                "nombre": "8001128062042023FT023.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/01. Reportes 2023/03 Link de Consulta de Proceso/8001128062042023FT023.xlsx"
              }
            ]
          },    
          {
            "id": 4,
            "nombre": "Actas",
            "files": [
              {
                "id": 13,
                "tipo": "pdf",
                "nombre": "Acta N 34 Procardio Servicios Medicos Integrales Nit 800210375-1 .pdf",
                "url": "assets/files/conciliacion_cartera_ips/01. Reportes 2023/04 Actas/Acta N 34 Procardio Servicios Medicos Integrales Nit 800210375-1 .pdf"
              },
              {
                "id": 14,
                "tipo": "pdf",
                "nombre": "Acta N 35 Clinica Uros S.A.S Nit 813011577-4.pdf",
                "url": "assets/files/conciliacion_cartera_ips/01. Reportes 2023/04 Actas/Acta N 35 Clinica Uros S.A.S Nit 813011577-4.pdf"
              },
              {
                "id": 15,
                "tipo": "pdf",
                "nombre": "Acta N 36 Fabilu S.A.S Nit 900242742-1.pdf",
                "url": "assets/files/conciliacion_cartera_ips/01. Reportes 2023/04 Actas/Acta N 36 Fabilu S.A.S Nit 900242742-1.pdf"
              }
            ]
          }
        ]
      },
      
      {
        "id": 1,
        "nombre": "REPORTES 2022",
        "acordion": [
          {
            "id": 1,
            "nombre": "Cronograma de Conciliación y Depuración",
            "files": [        
              {
                "id": 5,
                "tipo": "excel",
                "nombre": "Reporte FT021 Cronograma.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/01 Cronograma de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT021 Cronograma.xlsx"
              }
              ]
          },
          {
            "id": 2,
            "nombre": "Avance Proceso de Conciliación y Depuración",
            "files": [      
              {
                "id": 5,
                "tipo": "excel",
                "nombre": "Reporte FT022 01042022 a 30042022.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/02 Avance Proceso de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01042022 a 30042022.xlsx"
              },
              {
                "id": 6,
                "tipo": "excel",
                "nombre": "Reporte FT022 01052022 a 30052022.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/02 Avance Proceso de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01052022 a 30052022.xlsx"
              },
              {
                "id": 7,
                "tipo": "excel",
                "nombre": "Reporte FT022 01062022 a 30062022.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/02 Avance Proceso de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01062022 a 30062022.xlsx"
              },
              {
                "id": 8,
                "tipo": "pdf",
                "nombre": "Reporte FT022 01102022 a 30102022.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/02 Avance Proceso de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01102022 a 30102022.xlsx"
              },
              {
                "id": 8,
                "tipo": "pdf",
                "nombre": "Reporte FT022 01112022 a 30112022.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/02 Avance Proceso de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01112022 a 30112022.xlsx"
              }
            ]
          },
          {
            "id": 3,
            "nombre": "Link de Consulta de Proceso",
            "files": [
              {
                "id": 9,
                "tipo": "excel",
                "nombre": "Reporte FT023 01112022 a 30112022.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/03 Link de Consulta de Proceso/Reporte FT023 01112022 a 30112022.xlsx"
              },
              {
                "id": 10,
                "tipo": "excel",
                "nombre": "Reporte FT023.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/03 Link de Consulta de Proceso/Reporte FT023.xlsx"
              }
            ]
          },
          {
            "id": 4,
            "nombre": "Actas",
            "files": [
              {
                "id": 13,
                "tipo": "pdf",
                "nombre": "Acta N 21 Congregacion Dominicas de Santa Catalina de Sena-Clinica Nueva Nit 860010783-0.pdf",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/04 Actas/Acta N 21 Congregacion Dominicas de Santa Catalina de Sena-Clinica Nueva Nit 860010783-0.pdf"
              },
              {
                "id": 14,
                "tipo": "pdf",
                "nombre": "Acta N 22 Fundacion Cardio Infantil Nit 860035992-2.pdf",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/04 Actas/Acta N 22 Fundacion Cardio Infantil Nit 860035992-2.pdf"
              },
              {
                "id": 15,
                "tipo": "pdf",
                "nombre": "Acta N 23 Los Cobos Medical Center S.A.S Nit 901145394-8.pdf",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/04 Actas/Acta N 23 Los Cobos Medical Center S.A.S Nit 901145394-8.pdf"
              },
              {
                "id": 15,
                "tipo": "pdf",
                "nombre": "Acta N 24 Clinica Medical S.A.S Nit 830507718-8.pdf",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/04 Actas/Acta N 24 Clinica Medical S.A.S Nit 830507718-8.pdf"
              },
              {
                "id": 15,
                "tipo": "pdf",
                "nombre": "Acta N 25 Clinica Nueva El Lago SAS Nit 901153925-2.pdf",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/04 Actas/Acta N 25 Clinica Nueva El Lago SAS Nit 901153925-2.pdf"
              },
              {
                "id": 15,
                "tipo": "pdf",
                "nombre": "Acta N 31 IPS Universitaria.pdf",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/04 Actas/Acta N 31  IPS Universitaria.pdf"
              },
              {
                "id": 15,
                "tipo": "pdf",
                "nombre": "Acta N 32 Fundacion Santa Fe de Bogota Nit 860037950-2.pdf",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/04 Actas/Acta N 32 Fundacion Santa Fe de Bogota Nit 860037950-2.pdf"
              },
              {
                "id": 15,
                "tipo": "pdf",
                "nombre": "Acta N 33 Clinica Colsanitas Nit 800149384-6.pdf",
                "url": "assets/files/conciliacion_cartera_ips/02. Reportes 2022/04 Actas/Acta N 33 Clinica Colsanitas Nit 800149384-6.pdf"
              }
            ]
          }
        ]
      },
      
      {
        "id": 1,
        "nombre": "REPORTES 2021",
        "acordion": [
          {
            "id": 1,
            "nombre": "Cronograma de Conciliación y Depuración",
            "files": [      
              {
                "id": 5,
                "tipo": "excel",
                "nombre": "Reporte FT021 Cronograma.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/03. Reportes 2021/01 Cronograma de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT021 Cronograma.xlsx"
              }
              ]
          },
          {
            "id": 2,
            "nombre": "Avance Proceso de Conciliación y Depuración",
            "files": [      
              {
                "id": 5,
                "tipo": "excel",
                "nombre": "Reporte FT022 01022021 a 28022021.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/03. Reportes 2021/02 Avance Proceso de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01022021 a 28022021.xlsx"
              },
              {
                "id": 6,
                "tipo": "excel",
                "nombre": "Reporte FT022 01032021 a 31032021.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/03. Reportes 2021/02 Avance Proceso de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01032021 a 31032021.xlsx"
              }
            ]
          },
          {
            "id": 3,
            "nombre": "Link de Consulta de Proceso",
            "files": [
              {
                "id": 9,
                "tipo": "excel",
                "nombre": "Reporte FT023.xlsx",
                "url": "assets/files/conciliacion_cartera_ips/03. Reportes 2021/03 Link de Consulta del Proceso/Reporte FT023.xlsx"
              }
            ]
          },
          



          {
            "id": 4,
            "nombre": "Actas",
            "files": [
              {
                "id": 13,
                "tipo": "pdf",
                "nombre": "Acta N 13 2021 - Conciliacion ESE Hospital San Rafael de Tunja Nit 891800231-0.pdf",
                "url": "assets/files/conciliacion_cartera_ips/03. Reportes 2021/04 Actas/Acta N 13 2021 - Conciliacion ESE Hospital San Rafael de Tunja Nit 891800231-0.pdf"
              },
              {
                "id": 14,
                "tipo": "pdf",
                "nombre": "Acta N 14 2021 - Conciliacion Subred Integrada de Servicios de Salud Norte ESE 900971006-4.pdf",
                "url": "assets/files/conciliacion_cartera_ips/03. Reportes 2021/04 Actas/Acta N 14 2021 - Conciliacion  Subred Integrada de Servicios de Salud Norte ESE 900971006-4.pdf"
              },
              {
                "id": 15,
                "tipo": "pdf",
                "nombre": "Acta N 16 2021 - Conciliacion Subred Integrada de servicios de Salud Norte ESE 900971006-4.pdf",
                "url": "assets/files/conciliacion_cartera_ips/03. Reportes 2021/04 Actas/Acta N 16 2021 - Conciliacion Subred Integrada de servicios de Salud Norte ESE 900971006-4.pdf"
              },
              {
                "id": 15,
                "tipo": "pdf",
                "nombre": "Acta N 17 2021 - Conciliacion Fundacion Cardio Infantil.pdf",
                "url": "assets/files/conciliacion_cartera_ips/03. Reportes 2021/04 Actas/Acta N 17 2021 - Conciliacion Fundacion Cardio Infantil.pdf"
              }
            ]
          }
        ]
      },
      
    {
      "id": 1,
      "nombre": "REPORTES 2020",
      "acordion": [
        {
          "id": 1,
          "nombre": "Cronograma de Conciliación y Depuración",
          "files": [      
            {
              "id": 5,
              "tipo": "excel",
              "nombre": "Reporte FT021 Cronograma.xlsx",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/01 Cronograma de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT021 Cronograma.xlsx"
            }
            ]
        },
        {
          "id": 2,
          "nombre": "Avance Proceso de Conciliación y Depuración",
          "files": [      
            {
              "id": 5,
              "tipo": "excel",
              "nombre": "Reporte FT022 01062020 a 30062020.xlsx",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/02 Avance Proceso de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01062020 a 30062020.xlsx"
            },
            {
              "id": 6,
              "tipo": "excel",
              "nombre": "Reporte FT022 01072020 a 30072020.xlsx",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/02 Avance Proceso de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01072020 a 30072020.xlsx"
            },
            {
              "id": 6,
              "tipo": "excel",
              "nombre": "Reporte FT022 01082020 a 30082020.xlsx",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/02 Avance Proceso de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01082020 a 30082020.xlsx"
            },
            {
              "id": 6,
              "tipo": "excel",
              "nombre": "Reporte FT022 01102020 a 31102020.xlsx",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/02 Avance Proceso de Conciliaci%c3%b3n y Depuraci%c3%b3n/Reporte FT022 01102020 a 31102020.xlsx"
            }
          ]
        },
        {
          "id": 3,
          "nombre": "Link de Consulta de Proceso",
          "files": [
            {
              "id": 9,
              "tipo": "excel",
              "nombre": "Reporte FT023.xlsx",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/03 Link de Consulta del Proceso/Reporte FT023.xlsx"
            }
          ]
        },           
        {
          "id": 4,
          "nombre": "Actas",
          "files": [
            {
              "id": 13,
              "tipo": "pdf",
              "nombre": "Acta 01-2020 Conciliacion Subred Integrada de Servicios de Salud Sur 900958564-9.pdf",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/04 Actas/Acta 01-2020 Conciliacion Subred Integrada de Servicios de Salud Sur 900958564-9.pdf"
            },
            {
              "id": 14,
              "tipo": "pdf",
              "nombre": "Acta 02-2020 Conciliacion Hospital Federico Lleras.pdf",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/04 Actas/Acta 02-2020 Conciliacion Hospital Federico Lleras.pdf"
            },
            {
              "id": 15,
              "tipo": "pdf",
              "nombre": "Acta 03-2020 Conciliación Hospital Regional de Sogamoso ESE Nit 891855039-9.pdf",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/04 Actas/Acta 03-2020 Conciliaci%c3%b3n Hospital Regional de Sogamoso ESE Nit 891855039-9.pdf"
            },
            {
              "id": 15,
              "tipo": "pdf",
              "nombre": "Acta 04-2020 Conciliacion Fundacion Cardio Infantil Nit 860035992-2.pdf",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/04 Actas/Acta 04-2020 Conciliacion Fundacion Cardio Infantil Nit 860035992-2.pdf"
            },
            {
              "id": 15,
              "tipo": "pdf",
              "nombre": "Acta 06-2020 Conciliacion Clinica Santa Maria SAS Nit 800183943-7.pdf",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/04 Actas/Acta 06-2020 Conciliacion Clinica Santa Maria SAS Nit 800183943-7.pdf"
            },
            {
              "id": 15,
              "tipo": "pdf",
              "nombre": "Acta 07-2020 Conciliacion Clinica San Juan Bautista Nit 900272585-6.pdf",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/04 Actas/Acta 07-2020 Conciliacion Clinica San Juan Bautista Nit 900272585-6.pdf"
            },
            {
              "id": 15,
              "tipo": "pdf",
              "nombre": "Acta 10-2020 Conciliacion ESE Hospital de la Vega Nit 900807482-6.pdf",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/04 Actas/Acta 10-2020 Conciliacion ESE Hospital de la Vega Nit 900807482-6.pdf"
            },
            {
              "id": 15,
              "tipo": "pdf",
              "nombre": "Acta 11-2020 Conciliacion Hospital Santa Matilde de Madrid Nit 860009555-7.pdf",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/04 Actas/Acta 11-2020 Conciliacion Hospital Santa Matilde de Madrid Nit 860009555-7.pdf"
            },
            {
              "id": 15,
              "tipo": "pdf",
              "nombre": "Acta 12-2020 Conciliacion Clinica Colsanitas Nit 800149384-6.pdf",
              "url": "assets/files/conciliacion_cartera_ips/04. Reportes 2020/04 Actas/Acta 12-2020 Conciliacion Clinica Colsanitas Nit 800149384-6.pdf"
            }
          ]
        }
      ]
    }

]}
}
