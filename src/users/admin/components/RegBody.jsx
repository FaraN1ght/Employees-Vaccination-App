import { useNavigate } from "react-router-dom"
import { deleteEmp, getEmpList } from "../services/localstorage";

export const RegBody = ({ employee, setEmployee }) => {

    const { 
        id, 
        usuario, 
        contra,
        cedula, 
        nombres, 
        apellidos, 
        correo,
        fecha_nac,
        dir,
        telf,
        estado_vac,
        vacuna,
        fecha_vac,
        n_dosis,
    } = employee; 

    const navigate = useNavigate();

    const removeEmp = () => {
        deleteEmp(id);
        setEmployee(getEmpList());
    }

  return (
    <>
        <tr className="text-center">
            <td> {usuario} </td>
            <td> {contra} </td>
            <td> {cedula} </td>
            <td> {nombres} </td>
            <td> {apellidos} </td> 
            <td> {correo} </td>
            <td> {fecha_nac} </td>
            <td> {dir} </td>
            <td> {telf} </td>
            <td> {estado_vac} </td>
            <td> {vacuna} </td>
            <td> {fecha_vac} </td>
            <td> {n_dosis} </td>
            <td>
                <div className="d-flex gap-3">
                    <span 
                        role="button" 
                        className="badge bg-success" 
                        onClick={ () => navigate(`/editar-empleado/${id}`) }
                        >
                        EDITAR
                    </span>
                    <span 
                        role="button" 
                        className="badge bg-danger"
                        onClick={() => removeEmp()}
                        >
                        BORRAR
                    </span>
                </div>
            </td>
        </tr>
    </>
  )
}
