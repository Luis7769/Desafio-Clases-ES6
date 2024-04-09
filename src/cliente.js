class Cliente {
    constructor(nombre, impuesto) {
      this.nombre = nombre;
      this.impuesto = impuesto;
    }
    get nombre() {
      return this._nombre;
    }
    set nombre(nuevo_nombre) {
      this._nombre = nuevo_nombre;
    }

  
    calcularImpuesto() {
      return ((this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21);
    }
  }
  
  export default Cliente;