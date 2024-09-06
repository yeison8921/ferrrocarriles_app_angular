import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Info } from './servicios-excluidos';

@Component({
  selector: 'app-servicios-excluidos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './servicios-excluidos.component.html',
  styleUrl: './servicios-excluidos.component.css'
})

export class ServiciosExcluidosComponent {
  items: Info[]=[];
  constructor () {
    this.items = [
      {
        id:1,
        text:"USUARIOS PBS",
        info: [
          {
            id:1,
            text:"Cirugía estética con fines de embellecimiento y procedimientos de cirugía plástica cosmética."
          },
          {
            id:2,
            text:"Odontología cosmética."
          },
          {
            id:3,
            text:"Tratamientos nutricionales con fines estéticos."
          },
          {
            id:4,
            text:"Diagnóstico y Tratamientos para la Infertilidad y/o Impotencia Sexual."
          },
          {
            id:5,
            text:"Tratamientos o curas de reposo o del sueño."
          },
          {
            id:6,
            text:"Medias elásticas de soporte, corsés y/o fajas, sillas de ruedas, plantillas y zapatos ortopédicos, vendajes acrílicos, lentes de contacto, lentes para anteojos con materiales diferentes a vidrio o plástico, filtros y/o colores y películas especiales y aquellos otros dispositivos."
          },
          {
            id:7,
            text:"Medicamentos y sustancias que no se encuentren expresamente autorizados en la Manual de Medicamentos y terapéutica vigente."
          },
          {
            id:8,
            text:"Tratamiento con medicamentos o sustancias experimentales Trasplante de órganos e injertos biológicos diferentes a los descritos en el Acuerdo 008 de 2009 y demás normas que lo modifiquen o adicionen."
          },
          {
            id:9,
            text:"Tratamiento con psicoterapia individual, psicoanálisis o psicoterapia prolongada."
          },
          {
            id:10,
            text:"Tratamientos de periodoncia, ortodoncia, implantología, prótesis y blanqueamiento dental en la atención Odontológica."
          },
          {
            id:11,
            text:"Tratamiento con fines estéticos de afecciones vasculares o cutáneas."
          },
          {
            id:12,
            text:"Actividades, procedimientos e intervenciones de carácter educativo, instruccionalo de capacitación, que se lleven a cabo durante el proceso de rehabilitación, distintos a aquellos estrictamente necesarios para el manejo médico de la enfermedad y sus secuelas."
          },
          {
            id:13,
            text:"Atención que el afiliado se procure por su cuenta sin que haya mediado el contratista, siempre que esta no haya sido de carácter urgente."
          },
          {
            id:14,
            text:"Pañales para niños y adultos."
          },
          {
            id:15,
            text:"Toallas higiénicas Artículos cosméticos: No se consideran cosméticos los productos con actividad terapéutica para una patología definida."
          },
          {
            id:16,
            text:"Suplementos o complementos vitamínicos y nutricionales: Salvo aquellos casos en que por prescripción médica sean indispensables dentro del tratamiento."
          },
          {
            id:17,
            text:"Líquidos para lentes de contacto."
          },
          {
            id:18,
            text:"Tratamientos capilares Champús de cualquier tipo."
          },
          {
            id:19,
            text:"Jabones."
          },
          {
            id:20,
            text:"Cremas hidratantes."
          },
          {
            id:21,
            text:"Cremas antisolareso para las manchas en la piel."
          },
          {
            id:22,
            text:"Medicamentos o drogas para la memoria, excepto las aprobadas para el Tratamiento de Enfermedad de Alzheimer."
          },
          {
            id:23,
            text:"Medicamentos para la impotencia sexual o la disfunción eréctil."
          },
          {
            id:24,
            text:"Medicamentos anorexígenos."
          },
          {
            id:25,
            text:"Edulcorantes o sustitutos de la sal."
          },
          {
            id:26,
            text:"Enjuagues bucales, cremas dentales Cepillo y seda dental."
          },
          {
            id:27,
            text:"La internación en instituciones educativas, entidades de asistencia o protección social tipo ancianato, hogar sustituto, orfanato, hospicio, guardería o granja protegida."
          },
          {
            id:28,
            text:"El tratamiento de las complicaciones que surjan de las actividades, procedimientos e intervenciones y medicamentos no cubiertos por el plan de beneficios."
          },

          {
            id:29,
            text:"Cuidadores permanentes para pacientes crónicos con alteraciones de movilidad Tratamientos realizados fuera del territorio colombiano."
          }
        ]
      },
      {
        id:2,
        text:"USUARIOS PAC",
        info: [
          {
            id:1,
            text:"Cirugía estética con fines de embellecimiento y procedimientos de cirugía plástica cosmética."
          },
          {
            id:2,
            text:"Odontología cosmética: Definida como aquellos procedimientos que se realizan con fines estéticos y encaminados al mejoramiento de la apariencia física."
          },
          {
            id:3,
            text:"Tratamientos nutricionales con fines estéticos."
          },
          {
            id:4,
            text:"Diagnóstico y Tratamientos para la Infertilidad y/o Impotencia Sexual."
          },
          {
            id:5,
            text:"Tratamientos o curas de reposo o del sueño."
          },
          {
            id:6,
            text:"Tratamiento con fines estéticos de afecciones vasculares o cutáneas."
          },
          {
            id:7,
            text:"Tratamiento con medicamentos o sustancias experimentales."
          },
          {
            id:8,
            text:"Actividades, procedimientos e intervenciones de carácter educativo, instruccionalo de capacitación, que se lleven a cabo durante el proceso de rehabilitación, distintos a aquellos estrictamente necesarios para el manejo médico de la enfermedad y sus secuelas."
          },
          {
            id:9,
            text:"Atención que el afiliado se procure por su cuenta sin que haya mediado el contratista, siempre que esta no haya sido de carácter urgente."
          },
          {
            id:10,
            text:"Tratamientos de Implantes en la atención odontológica."
          },
          {
            id:11,
            text:"Tratamiento con psicoterapia individual, psicoanálisis o psicoterapia prolongada."
          },
          {
            id:12,
            text:"Pañales para niños y adultos."
          },
          {
            id:13,
            text:"Toallas higiénicas Suplementos o complementos vitamínicos y nutricionales: Salvo aquellos casos en que por prescripción médica sean indispensables dentro del tratamiento."
          },
          {
            id:14,
            text:"Líquidos para lentes de contacto."
          },
          {
            id:15,
            text:"Enjuagues bucales, cremas dentales Cepillo y seda dental."
          },
          {
            id:16,
            text:"Tratamientos capilares Cremas hidratantes salvo en aquellos casos en que por prescripción médica sean indispensables dentro del tratamiento."
          },
          {
            id:17,
            text:"Medicamentos o drogas para la memoria, excepto las aprobadas para el Tratamiento de Enfermedad de Alzheimer. 22. Productos Cosméticos. No se consideran cosméticos los productos con actividad terapéutica para una patología definida."
          },
          {
            id:18,
            text:"La internación en instituciones educativas, entidades de asistencia o protección social tipo ancianato, hogar sustituto, orfanato, hospicio, guardería o granja protegida."
          },
          {
            id:19,
            text:"Cuidadores permanentes para pacientes crónicos con alteraciones de movilidad."
          }
        ]
      }
    ]
  }
}
