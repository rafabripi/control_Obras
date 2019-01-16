export class Usuario {
    constructor(
        public user: String,
        public pass: String,
        public tipo?: String,
        public nombre?: String,
        public apellidos?: String,
        public correo?: String,
        public estado?: Boolean,
    ) {}
}
