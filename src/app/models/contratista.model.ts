export class Contratista {
    constructor (
        public razon_social: String,
        public rfc: String,
        public representante: String,
        public estado?: String,
        public ciudad?: String,
        public codigo_postal?: String,
        public colonia?: String,
        public calle?: String,
        public numero?: String,
        public numero_int?: String,
        public telefono?: String,
        public contacto?: String,
    ) {}
}
