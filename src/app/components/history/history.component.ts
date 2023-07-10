import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { PacientesService } from 'src/app/services/pacientes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit{
 formulario:FormGroup
  constructor(
    private userService:UserService 
   
  ) {
    this.formulario = new FormGroup({
      id: new FormControl(''),
      codigo: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      cedula: new FormControl(''),
      edad: new FormControl(''),
      fecha: new FormControl(''),
      sexo: new FormControl(''),
      direccion: new FormControl(''),
      sintomas: new FormControl(''),
      diagnostico: new FormControl(''),
      tratamiento: new FormControl(''),
      observaciones: new FormControl('')
    })
  }

  ngOnInit(): void {
    
  }


  codigo: string = '';
  nombre: string = '';
  apellido: string = '';
  cedula: string = '';
  edad: string = '';
  fecha: string = '';
  sexo: string = '';
  direccion: string = '';
  sintomas: string = '';
  diagnostico: string = '';
  tratamiento: string = '';
  observaciones: string = '';

  codigoError: string = '';
  nombreError: string = '';
  apellidoError: string = '';
  cedulaError: string = '';
  edadError: string = '';
  fechaError: string = '';
  sexoError: string = '';
  direccionError: string = '';
  sintomasError: string = '';
  diagnosticoError: string = '';
  tratamientoError: string = '';
  observacionesError: string = '';

  guardarHabilitado: boolean = true;

  validarFormulario(): void {
    const codigoRegex = /^[a-zA-Z0-9]{4}$/;
    this.codigoError = !codigoRegex.test(this.codigo)
      ? 'El código debe contener 4 caracteres alfanuméricos.'
      : '';

    const nombreRegex = /^[a-zA-Z\s]{1,50}$/;
    this.nombreError = !nombreRegex.test(this.nombre)
      ? 'El nombre debe contener solo letras y tener máximo 50 caracteres.'
      : '';

    const apellidoRegex = /^[a-zA-Z\s]{1,50}$/;
    this.apellidoError = !apellidoRegex.test(this.apellido)
      ? 'El apellido debe contener solo letras y tener máximo 50 caracteres.'
      : '';

    const cedulaRegex = /^[0-9]{1,10}$/;
    this.cedulaError = !cedulaRegex.test(this.cedula)
      ? 'La cédula debe contener solo números y tener máximo 10 dígitos.'
      : '';

    const edadRegex = /^[0-9]{1,2}$/;
    this.edadError = !edadRegex.test(this.edad)
      ? 'La edad debe contener solo números y tener máximo 2 dígitos.'
      : '';

    this.fechaError = this.fecha === '' ? 'Seleccione una fecha de ingreso válida.' : '';

    this.sexoError = this.sexo === '' ? 'Seleccione una opción de sexo válida.' : '';

    this.direccionError = this.direccion === '' ? 'Ingrese una dirección.' : '';

    this.sintomasError = this.sintomas === '' ? 'Ingrese los síntomas.' : '';

    this.diagnosticoError = this.diagnostico === '' ? 'Ingrese el diagnóstico.' : '';

    this.tratamientoError = this.tratamiento === '' ? 'Ingrese el tratamiento.' : '';

    this.observacionesError = this.observaciones === '' ? 'Ingrese las observaciones.' : '';
  }

  limpiarMensajeError(campo: string): void {
    switch (campo) {
      case 'codigo':
        this.codigoError = '';
        break;
      case 'nombre':
        this.nombreError = '';
        break;
      case 'apellido':
        this.apellidoError = '';
        break;
      case 'cedula':
        this.cedulaError = '';
        break;
      case 'edad':
        this.edadError = '';
        break;
      case 'fecha':
        this.fechaError = '';
        break;
      case 'sexo':
        this.sexoError = '';
        break;
      case 'direccion':
        this.direccionError = '';
        break;
      case 'sintomas':
        this.sintomasError = '';
        break;
      case 'diagnostico':
        this.diagnosticoError = '';
        break;
      case 'tratamiento':
        this.tratamientoError = '';
        break;
      case 'observaciones':
        this.observacionesError = '';
        break;
    }
  }

  guardarFormulario():void {
    this.validarFormulario();

    if (
      this.nombreError ||
      this.apellidoError ||
      this.cedulaError ||
      this.edadError ||
      this.fechaError ||
      this.sexoError ||
      this.direccionError ||
      this.sintomasError ||
      this.diagnosticoError ||
      this.tratamientoError ||
      this.observacionesError
    ) {
      // Si hay errores, no se guarda el formulario
      return;
    }

    alert('Formulario guardado correctamente');
  }
 


}

