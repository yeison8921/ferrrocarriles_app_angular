import { Component } from '@angular/core';
import { Noticias } from './interfaces';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [NgFor],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css',
})
export class NoticiasComponent {
  noticias: Noticias[] = [
    {
      imagen: '/assets/files/news/news_images/1118.png',
      titulo: 'Circular Día Cívico',
      fecha: '15 de julio de 2024',
      descripcion: '15 de Julio de 2024',
      url: '/sala-de-prensa/noticias/circular-dia-civico/1118/1',
    },
    {
      imagen: '/assets/files/news/news_images/1117.png',
      titulo:
        'Reporte Boletín de Deudores Morosos del Estado - BDME, primer semestre, mayo de 2024',
      fecha: '14 de mayo de 2024',
      descripcion: 'Circular No. OAJ - 202401300000564 del 06-05-2024',
      url: '/sala-de-prensa/noticias/reporte-boletin-de-deudores-morosos-del-estado---bdme,-primer-semestre,-mayo-de-2024/1117/1',
    },
    {
      imagen: '/assets/files/news/news_images/1116.png',
      titulo: 'Circular día cívico del cuidado del agua',
      fecha: '19 de abril de 2024',
      descripcion: 'Decreto 500 de 18 de abril de 2024',
      url: '/sala-de-prensa/noticias/circular-dia-civico-del-cuidado-del-agua/1116/1',
    },
    {
      imagen: '/assets/files/news/news_images/1115.png',
      titulo: 'Circular de envío de órdenes de cirugias ordenadas',
      fecha: '15 de febrero de 2024',
      descripcion: 'Circular de envío de órdenes de cirugias ordenadas',
      url: '/sala-de-prensa/noticias/circular-de-envio-de-ordenes-de-cirugias-ordenadas/1115/1',
    },
    {
      imagen: '/assets/files/news/news_images/1114.png',
      titulo: 'Circular de Cuotas Moderadoras y Copagos 2024',
      fecha: '18 de enero de 2024',
      descripcion: 'Cuotas Moderadoras y Copagos 2024',
      url: '/sala-de-prensa/noticias/circular-de-cuotas-moderadoras-y-copagos-2024/1114/1',
    },
    {
      imagen: '/assets/files/news/news_images/1113.png',
      titulo: 'Resolución No. 2537 de 28 de diciembre 2023',
      fecha: '30 de diciembre de 2023',
      descripcion:
        'Resolución del Reglamento del Cómite de Defensa Judicial y Conciliación Definitiva',
      url: '/sala-de-prensa/noticias/resolucion-no-2537-de-28-de-diciembre-2023/1113/1',
    },
    {
      imagen: '/assets/files/news/news_images/1112.png',
      titulo:
        'OPERADORES HABILITADOS PROCESO DE RENOVACIÓN Y ASIGNACIÓN DE CÓDIGO DE DESCUENTO POR NÓMINA DE PENSIONADOS 2023 - 2024',
      fecha: '14 de noviembre de 2023',
      descripcion:
        'El Fondo de Pasivo Social de Ferrocarriles Nacionales de Colombia, informa mediante la circular GITGPE - 202303100002504, los operadores que han sido habilitados dentro del proceso de asignación y renovación de código de descuento 2023 - 2024.',
      url: '/sala-de-prensa/noticias/operadores-habilitados-proceso-de-renovacion-y-asignacion-de--codigo-de-descuento-por-nomina-de-pensionados-2023---2024/1112/1',
    },
    {
      imagen: '/assets/files/news/news_images/1111.png',
      titulo:
        'REPORTE BOLETÍN DE DEUDORES MOROSOS DEL ESTADO (BDME) SEGUNDO SEMESTRE, NOVIEMBRE DE 2023.',
      fecha: '02 de noviembre de 2023',
      descripcion: 'Circular No. OAJ - 202301300002474 del 01/11/2023',
      url: '/sala-de-prensa/noticias/reporte-boletin-de-deudores-morosos-del-estado-(bdme)-segundo-semestre,-noviembre-de-2023/1111/1',
    },
    {
      imagen: '/assets/files/news/news_images/1109.png',
      titulo: 'COMUNICACIÓNA TERCEROS PARA CANCELACIÓN DE REGISTROS DE CARRERA',
      fecha: '29 de septiembre de 2023',
      descripcion:
        'COMUNICACIÓNA TERCEROS PARA CANCELACIÓN DE REGISTROS DE CARRERA',
      url: '/sala-de-prensa/noticias/comunicaciona-terceros-para-cancelacion-de-registros-de-carrera/1109/1',
    },

    {
      imagen: '/assets/files/news/news_images/1108.png',
      titulo:
        'Apertura Proceso de Renovación o Asignación de Código de Descuento para Operadores de Libranza 2023-2024',
      fecha: '25 de septiembre de 2023',
      descripcion:
        'Para cooperativas, sociedades, entidades financieras y patrimonios autónomos',
      url: '/sala-de-prensa/noticias/apertura-proceso-de-renovacion-o-asignacion-de-codigo-de-descuento-para-operadores-de-libranza-2023-2024/1108/1',
    },
    {
      imagen: '/assets/files/news/news_images/1107.png',
      titulo:
        'A partir del día jueves 1 de junio el Fondo de Pasivo Social de Ferrocarriles Nacionales de Colombia, tiene en ejecución el contrato de Prestación de servicios integrales de Salud. No CPSS 280-2023.',
      fecha: '02 de junio de 2023',
      descripcion:
        'A partir del día jueves 1 de junio el Fondo de Pasivo Social de Ferrocarriles Nacionales de Colombia, tiene en ejecución el contrato de Prestación de servicios integrales de Salud. No CPSS 280-2023.',
      url: '/sala-de-prensa/noticias/a-partir-del-dia-jueves-1-de-junio-el-fondo-de-pasivo-social-de-ferrocarriles-nacionales-de-colombia,-tiene-en-ejecucion-el-contrato-de-prestacion-de-servicios-integrales-de-salud-no-cpss-280-2023-/1107/1',
    },
    {
      imagen: '/assets/files/news/news_images/1106.png',
      titulo:
        'Reporte Boletín de Deudores Morosos del Estado (BDME) Primer Semestre, Mayo de 2023.',
      fecha: '09 de mayo de 2023',
      descripcion: 'Circular No. 202301300001104 de 05-05-2023',
      url: '/sala-de-prensa/noticias/reporte-boletin-de-deudores-morosos-del-estado-(bdme)-primer-semestre,-mayo-de-2023/1106/1',
    },
    {
      imagen: '/assets/files/news/news_images/1105.png',
      titulo:
        'Evento protocolario de otorgamiento de los certificados en la Normas Técnica Colombiana ISO 9001:2015, ISO 14001:2015 y ISO 45001:2018- ICONTEC',
      fecha: '04 de abril de 2023',
      descripcion:
        'Evento protocolario de otorgamiento de los certificados en la Normas Técnica Colombiana ISO 9001:2015, ISO 14001:2015 y ISO 45001:2018- ICONTEC para el FPSFNC.',
      url: '/sala-de-prensa/noticias/evento-protocolario-de-otorgamiento-de-los-certificados-en-la--normas-tecnica-colombiana-iso-9001:2015,-iso-14001:2015-y-iso-45001:2018--icontec/1105/1',
    },
    {
      imagen: '/assets/files/news/news_images/1104.png',
      titulo: 'Certificación de los procesos del FPS-FNC',
      fecha: '09 de marzo de 2023',
      descripcion:
        'Los 14 procesos de la entidad fueron certificados por ICONTEC',
      url: '/sala-de-prensa/noticias/certificacion-de-los-procesos-del-fps-fnc/1104/1',
    },
    {
      imagen: '/assets/files/news/news_images/1103.png',
      titulo:
        'Cobro indebido de mesadas pensionales y trámite para dineros causados anteriores al fallecimiento',
      fecha: '26 de diciembre de 2022',
      descripcion:
        'Por medio del cual se informa sobre el indebido cobro de mesadas pensionales y el trámite para el cobro de dineros causados y no cobrados.',
      url: '/sala-de-prensa/noticias/cobro-indebido-de-mesadas-pensionales-y-tramite-para-dineros-causados-anteriores-al-fallecimiento/1103/1',
    },
    {
      imagen: '/assets/files/news/news_images/1102.png',
      titulo: 'Aviso de Resolución No. 1473',
      fecha: '17 de noviembre de 2022',
      descripcion:
        'Aviso de Resolución No. 1473 del 12 de octubre de 2022 “Por medio de la cual se resuelve sobre una sustitución pensional”',
      url: '/sala-de-prensa/noticias/aviso-de-resolucion-no-1473/1102/1',
    },
    {
      imagen: '/assets/files/news/news_images/1101.png',
      titulo:
        'Reporte Boletín de Deudores Morosos del Estado (BDME) II Semestre, Noviembre de 2022.',
      fecha: '02 de noviembre de 2022',
      descripcion: 'Circular No. OAJ-202201300002974 del 01/11/2022',
      url: '/sala-de-prensa/noticias/reporte-boletin-de-deudores-morosos-del-estado-(bdme)-ii-semestre,-noviembre-de-2022/1101/1',
    },
    {
      imagen: '/assets/files/news/news_images/1100.png',
      titulo: 'Aviso de Resolución No. 0456',
      fecha: '31 de octubre de 2022',
      descripcion:
        'Aviso de Resolución No. 0456 del 19 de abril de 2022 “Por medio de la cual se resuelve un recurso de reposición”',
      url: '/sala-de-prensa/noticias/aviso-de-resolucion-no-0456/1100/1',
    },
    {
      imagen: '/assets/files/news/news_images/1095.png',
      titulo:
        'Resultado de la reunión entre la Alta Dirección y representantes de los funcionarios del FPS-FNC',
      fecha: '20 de octubre de 2022',
      descripcion:
        'Reunión Alta Dirección y representantes de los funcionarios del FPS-FNC',
      url: '/sala-de-prensa/noticias/resultado-de-la-reunion-entre-la-alta-direccion-y-representantes-de-los-funcionarios-del-fps-fnc/1095/1',
    },
  ];
}
