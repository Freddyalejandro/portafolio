
package conexion;

import controlador.controlador;
import modelo.Empleado;
import vista.ventana_tablaEmpleados;


public class Principal {

    
    public static void main(String[] args) {
        Empleado modelo = new Empleado();
        ventana_tablaEmpleados vista = new ventana_tablaEmpleados();
        controlador controlador = new controlador(modelo,vista);
        controlador.iniciar();
        
        
    }
    
}
