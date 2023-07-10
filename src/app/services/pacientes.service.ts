import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc} from '@angular/fire/firestore';

import Paciente from '../interfaces/pacientes.interface';


@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private firestore: Firestore) { }

  addPaciente(paciente: Paciente) {
    const pacienteRef = collection(this.firestore, 'paciente');
    return addDoc(pacienteRef, paciente);
  }


}