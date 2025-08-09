function Consultorio(nombre, pacientes) {
    this._nombre = nombre;
    this._pacientes = pacientes || [];

    Consultorio.prototype.getNombre = function() {
        return this._nombre;
    }

    Consultorio.prototype.getPacientes = function() {
        this._pacientes.forEach(function(paciente, index) {
            console.log('--------------------');
            console.log(`Paciente n°: ${index}`);
            console.log(`Nombre: ${paciente._nombre}`);
            console.log(`Edad: ${paciente._edad}`);
            console.log(`Rut: ${paciente._rut}`);
            console.log(`Diagnóstico: ${paciente._diagnostico}`);
            console.log('--------------------');
        });
    }

    Consultorio.prototype.getPacientePorNombre = function(busquedaNombre) {
        this._pacientes.forEach(function(paciente, index) {
            console.log('--------------------');
            if (paciente._nombre === busquedaNombre) {
                console.log(`Paciente n°: ${index}`);
                console.log(`Nombre: ${paciente._nombre}`);
                console.log(`Edad: ${paciente._edad}`);
                console.log(`Rut: ${paciente._rut}`);
                console.log(`Diagnóstico: ${paciente._diagnostico}`);
            }
            console.log('--------------------');
        });
    }
}

function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = nombre;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;

    Paciente.prototype.getNombre = function() {
        return this._nombre;
    }

    Paciente.prototype.getEdad = function() {
        return this._edad;
    }

    Paciente.prototype.getRut = function() {
        return this._rut;
    }

    Paciente.prototype.getDiagnostico = function() {
        return this._diagnostico;
    }
}

var pacienteCero = new Paciente('Valeria', 39, "16.381.360-2", "Problemas de Ansiedad.");
var paciente1 = new Paciente("Ybsen", 30, "16.222.228-2", "Problemas de rinitis.");
var consultorio_sapu = new Consultorio("sapu", [pacienteCero, paciente1]);

console.log(pacienteCero.getNombre());
console.log(paciente1.getEdad());
paciente1._diagnostico = "Gripe General"; // Modificación directa del diagnóstico

console.log(paciente1.getDiagnostico());
console.log(consultorio_sapu.getNombre());

consultorio_sapu.getPacientes();
consultorio_sapu.getPacientePorNombre("Ybsen");
consultorio_sapu.getPacientePorNombre("Valeria");