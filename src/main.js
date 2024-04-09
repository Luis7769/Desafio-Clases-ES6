import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

//creamos el impuesto
const impuestoUno = new Impuesto(1000, 200);
//creamos el cliente
let clienteUno = new Cliente("Luis", impuestoUno);


console.log(clienteUno.nombre, clienteUno.calcularImpuesto());





