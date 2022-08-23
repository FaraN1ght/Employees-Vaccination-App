import { useNavigate } from "react-router-dom"

export const AdminPage = () => {

    const navigate = useNavigate();

  return (
    <>
        <div className=" d-flex flex-column justify-content-center">
            <h1 className="text-center my-4 p-2" style={{fontSize : 40+'px'}}>MENU ADMINISTRADOR</h1>
            
            <button
                className="btn btn-outline-secondary my-4" 
                style={{fontSize : 24+'px'}}
                onClick={() => navigate('/listar-empleado')}
            >
                LISTAR EMPLEADOS</button>

            <button
                className="btn btn-outline-secondary my-4" 
                style={{fontSize : 24+'px'}}
                onClick={() => navigate('/crear-empleado')}
            >
                CREAR EMPLEADOS</button>
        </div>
    </>
  )
}
