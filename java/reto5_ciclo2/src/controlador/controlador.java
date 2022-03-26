package controlador;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;
import modelo.Conexion;
import modelo.Empleado;
import vista.ventana_tablaEmpleados;

public class controlador implements ActionListener {

    Conexion conectar = new Conexion();
    Connection connect = conectar.getConexion();

    private Empleado mod;
    private ventana_tablaEmpleados vista;

    public controlador(Empleado mod, ventana_tablaEmpleados vista) {
        this.mod = mod;
        this.vista = vista;
        this.vista.btactualizar.addActionListener(this);
        this.vista.btconsultar.addActionListener(this);
        this.vista.bteliminar.addActionListener(this);
        this.vista.btningresar.addActionListener(this);
    }

    public void iniciar() {
        vista.setVisible(true);
        vista.setTitle("MVC CONECTION BD47");
        vista.setLocation(null);

    }

    @Override
    public void actionPerformed(ActionEvent e) {
        DefaultTableModel tabladatos = (DefaultTableModel) vista.tabla.getModel();
        if (e.getSource() == vista.btactualizar) {
            tabladatos.setRowCount(0);
            try {
                PreparedStatement st = connect.prepareStatement("UPDATE empleados SET Nombre=?, Apellido=?, Antiguedad=?,Documento=? WHERE Id=?");
                st.setString(1, vista.txtnombre.getText());
                st.setString(2, vista.txtapellidos.getText());
                st.setInt(3, Integer.parseInt(vista.txtantiguedad.getText()));
                st.setInt(4, Integer.parseInt(vista.txtdoc.getText()));
                st.setInt(5, Integer.parseInt(vista.txtid.getText()));
                st.execute();
                JOptionPane.showMessageDialog(null, "datos actualizados");
            } catch (Exception ee) {
                JOptionPane.showMessageDialog(null, ee.getMessage().toString());
            }
        } else if (e.getSource() == vista.btconsultar) {

            tabladatos.setRowCount(0);
            ResultSet rs = null;
            try {
                PreparedStatement st = connect.prepareStatement("SELECT Id,Nombre,Apellido,Antiguedad,Documento FROM empleados");
                rs = st.executeQuery();//ejecuta la consulta  de st
                while (rs.next()) {
                    tabladatos.addRow(new Object[]{rs.getInt("id"), rs.getString("Nombre"), rs.getString("Apellido"), rs.getInt("Antiguedad"), rs.getInt("Documento")});
                }
            } catch (Exception ee) {
                JOptionPane.showMessageDialog(null, ee.getMessage().toString());
            }
        } else if (e.getSource() == vista.bteliminar) {
            tabladatos.setRowCount(0);
            try {
                PreparedStatement st = connect.prepareStatement("DELETE FROM empleados WHERE Id=?");
                st.setInt(1, Integer.parseInt(vista.txtid.getText()));
                st.execute();
                JOptionPane.showMessageDialog(null, "registro eliminado");
            } catch (Exception ee) {
                JOptionPane.showMessageDialog(null, ee.getMessage().toString());
            }
        } else if (e.getSource() == vista.btningresar) {
            tabladatos.setRowCount(0);
            try {
                PreparedStatement st = connect.prepareStatement("INSERT INTO empleados(Nombre,Apellido,Antiguedad,Documento)VALUES(?,?,?,?)");
                st.setString(1, vista.txtnombre.getText());
                st.setString(2, vista.txtapellidos.getText());
                st.setInt(3, Integer.parseInt(vista.txtantiguedad.getText()));
                st.setInt(4, Integer.parseInt(vista.txtdoc.getText()));
                st.execute();
                JOptionPane.showMessageDialog(null, "nuevo registro");
            } catch (Exception ee) {
                JOptionPane.showMessageDialog(null, ee.getMessage().toString());
            }
        }

    }
}
