export class Avance {
    constructor(
        public fecha: Date,
        public avance: String,
        public obraId: String,
        public usuarioQuery: String,
        public comentarios?: String
    ) {}
}
