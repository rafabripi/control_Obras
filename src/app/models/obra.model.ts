export class Obra {
    constructor(
        public clave_municipal: string,
        public nombre_obra: string,
        public localidad: string,
        public tipo_ejecucion: string,
        public estado: string,
        public meta?: string,
        public beneficiarios_directos?: number,
        public direccion_responsable?: string,
        public numero_contrato?: string,
        public fecha_contrato?: Date,
        public supervisor?: string,
        public programa?: string,
        public inversion_aprobada?: number,
        public contratista?: string,
        public nota?: string
    ) {}
}
