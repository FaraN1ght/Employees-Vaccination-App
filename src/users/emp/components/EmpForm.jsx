import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm";

export const EmpForm = ({ employee, setEmployee }) => {

  const navigate = useNavigate();

  const credentials = {
    user: '',
    pass: '',
  }

  const {
    handleSubmit,
    handleInputChange,
  } = useForm(credentials);

  return (
    <>
      <div>
        <button 
          className="btn btn-outline-warning my-4"
          onClick={() => navigate("/login")}
        >
          VOLVER </button>

        <div className="card border-primary p-5 m-4">
          
          <h1 className="text-center mb-4">LOGIN EMPLEADO</h1>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="nombres" className="form-label mt-2">USUARIO</label>
              <input 
                id="user" 
                name = "user"
                onChange={handleInputChange}
                type="text" 
                maxLength="80"
                className="form-control" 
                placeholder="Ingrese su usuario"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="contra" className="form-label mt-2">CONTRASEÑA</label>
              <input 
                id = "pass" 
                name = "pass"
                onChange={handleInputChange}
                type="password" 
                maxLength="80"
                className="form-control" 
                placeholder="Ingrese su contraseña"
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button 
                type="submit"
                className="btn btn-outline-success"
                >
                INICIAR SESIÓN
              </button>
            </div>
            
          </form>
        
        </div>
      </div>
    </>
  )
}