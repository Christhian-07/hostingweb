import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { PacientesService } from 'src/app/services/pacientes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patientregistry',
  templateUrl: './patientregistry.component.html',
  styleUrls: ['./patientregistry.component.css']
})
export class PatientregistryComponent {

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
  nombre: string = '';
  apellido: string = '';
  cedula: string = '';
  edad: string = '';
  sexo: string = '';
  direccion: string = '';
  fecha: string = '';

  nombreError: string = '';
  apellidoError: string = '';
  cedulaError: string = '';
  edadError: string = '';
  sexoError: string = '';
  direccionError: string = '';
  fechaError: string = '';

  guardarHabilitado: boolean = true;

  validarFormulario(): void {
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
  }

  limpiarMensajeError(campo: string): void {
    switch (campo) {
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
    }
  }

  guardarFormulario(): void {
    this.validarFormulario();

    if (
      this.nombreError ||
      this.apellidoError ||
      this.cedulaError ||
      this.edadError ||
      this.fechaError ||
      this.sexoError ||
      this.direccionError 
    ) {
      // Si hay errores, no se guarda el formulario
      return;
    }

    alert('Formulario guardado correctamente');
  }

 
}
