import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" d-flex flex-column justify-content-center">
        <h1 
          className="text-center my-4 p-2" 
          style={{fontSize : 40+'px'}}>ROL DE USUARIO
        </h1>
        
        <button
            className="btn btn-outline-secondary my-4" 
            style={{fontSize : 24+'px'}}
            onClick={() => navigate('/admin')}
        >
            USUARIO ADMINISTRADOR
        </button>

        <button
            className="btn btn-outline-secondary my-4" 
            style={{fontSize : 24+'px'}}
            onClick={() => navigate('/emp')}
        >
            USUARIO EMPLEADO
        </button>
      </div>
    </>
  )
}
