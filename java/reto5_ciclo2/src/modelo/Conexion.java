
package modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import javax.swing.JOptionPane;

 
public class Conexion {
     String url= "jdbc:sqlite:C:/Users/giuli/Desktop/base de datos/ciclo5.db";
   //ruta de acceso base de datos
    Connection connect;//lo que vamos a utulizar para manejar la base de datos
    
    public Connection getConexion(){
        try {
            connect = DriverManager.getConnection(url);// con esta funcion estamos conectando el bottton al url
            if (connect !=null){
                JOptionPane.showMessageDialog(null,"Conectado a la base de datos");// aqui mostrara en pantalla que esta conectada
            }
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,e.getMessage().toString());// aqui mostrara en pantalla que no esta conectada
        }
        return connect;
        
    }
    
   
    }
