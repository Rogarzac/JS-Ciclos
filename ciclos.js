/*
condiciones: alterar el orden natural del codigo
estructura de control: controlar la ejecucion del codigo
Ciclos o bucles (loops)

Tambien conocios como bucles, son estructura de control que nos van a permitir ejecutrar un bloque de codigo de forma reptida, hasta que se cumpla una condicion especifica.

Es importante usar ciclos para automatizar tareas repetitivas

en JS existen los siguientes ciclos:
 -While
 -do while
 -for


 interar: proceso de reptir una secuencia de instrucciones
 estructura de control: herramienta especial para crear algoritmos o programas mas dinamicos y flexible

*/

/*
While: ejecuta un bloque de codigo mientras se cumpla una condicion especifica. este ciclo se repite mientras la condicion sea verdadera, y el bloque de codigo se ejecuta siempre y cuando al condicion se mantenga. la condicion se evalua antes de cada iteracion.

while (condicion){
    ///codigo que se ejecuta
}
*/
miCrushMequiere = false;
while (miCrushMequiere){
    console.log("SereFeliz");
} 
 //Ejemplo de un consultorio dental
 let capacidadPacientes = 50;
 let pacientesEnConsultorio = 15;
//mientras 15 sea menor que 50...
 while (pacientesEnConsultorio < capacidadPacientes){
    //seguire dando servicio
    console.log("Seguimos dando servicio");
    //aumento en uno mis pacientes
    pacientesEnConsultorio ++;
 }  // mientras sea verdadero, se ejecuta la intruccion (si tengo hambre, como) While: Primero pregunta y si es verdadero ejecuta.

 /* Do While (hacer mientras)

 //se ejecuta la instruccion, mientras sea verdadero (como y luego pregunto si tengo hambre) Do While: Primero ejecuta, despues pregunta y si es verdadero, vuelve a ejecutar
do {
    //codigo a ejecutar
} while (condicion);

 */

var contadorPacientes = 0
do {
    var nombre= prompt("ingresa el nombre del paciente");
    if(nombre) {
        contadorPacientes++;
    }
} while (contadorPacientes < 15 && confirm("desea registrar otro paciente?"));

console.log("Numero total de pacientes: ", contadorPacientes)

/*For
Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar.

consiste de tres partes fundamentales: 
    - Inicializacion: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio)
    - Condicion: es el detonante que verificamos antes de cada iteracion para saber si se sigue ejecutando o no (siempre y cuando sea verdadera)
    - Expresion de iteracion (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.

    for (inicializacion; condicion; expresion de iteracion){
        //bloque de codigo a ejecutar
    }

*/

//Crea un codigo que imprima los numeros del 0 al 4

for (var valorInicial = 0; valorInicial<5; valorInicial++) {

    console.log(valorInicial);
}

//Version mas "comercial"
for (var i = 0; i < 5; i+=5) {
    console.log(i);
}

//Consultorio dental -  registro de citas con un for

let cantidadDeCitasDiarias = 5;

for (let i =1; i <= cantidadDeCitasDiarias; i++){
    var nombre = prompt("ingrese el nombre del paciente " + i);
}



let numeroVisitas = 0;

do {
    var citaNueva = prompt("Quieres agendar una cita?")
    if (citaNueva) {
        numeroVisitas++;
    }
} while (numeroVisitas >= 5);
console.log("descuento");