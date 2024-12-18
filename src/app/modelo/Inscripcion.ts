import { Usuario } from "./Usuario";
import { Actividad } from "./Actividad";

export class Inscripcion {
    id: number = 0;
    tipoVinculacion: String = "";
    fechaInscripcion: Date = new Date();
    usuario: number= 0 ;
    actividad_id : number = 0 ;
    estado: String = "activo";
    

    constructor(id: number = 0, tipoVinculacion: String, fechaInscripcion: Date, usuario: number,actividad_id :number  , estado: String = "activo",) {
        this.id = id;
        this.tipoVinculacion = tipoVinculacion;
        this.fechaInscripcion = fechaInscripcion;
        this.usuario = usuario;
        this.actividad_id = actividad_id;
        this.estado = estado;
    }
}

