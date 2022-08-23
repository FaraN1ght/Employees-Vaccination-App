import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm";

export const RegForm = () => {

  const navigate = useNavigate();

  const initialForm = {
    nombres: '',
    apellidos: '',
    cedula: '',
    correo: '',
  };

  const { formValues,
    formErrors,
    isSubmit,
    cleanForm,
    handleSubmit,
    handleInputChange,
  } = useForm(initialForm);

  return (
    <>
      <div>
        <button 
          className="btn btn-outline-warning my-4"
          onClick={() => navigate("/admin")}
        >
          VOLVER </button>

        <div className="card border-primary p-5 m-4">
          {
            Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="alert alert-dismissible alert-success">
                <strong className="text-center">REGISTRO EXITOSO!</strong>
              </div>
            ) : null
          }
          <h1 className="text-center mb-4">EMPLEADO</h1>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="nombres" className="form-label mt-2">Nombres</label>
              <input 
                id="nombres" 
                name = "nombres"
                value = {formValues.nombres}
                onChange = {handleInputChange}
                type="text" 
                maxLength="40"
                className="form-control" 
                placeholder="Ingrese sus nombres"
              />
            </div>
            <p style={{color: "red"}}> {formErrors.nombres} </p>
            <div className="form-group">
              <label htmlFor="apellidos" className="form-label mt-2">Apellidos</label>
              <input 
                id = "apellidos" 
                name = "apellidos"
                value = {formValues.apellidos}
                onChange = {handleInputChange}
                type="text" 
                maxLength="40"
                className="form-control" 
                placeholder="Ingrese sus apellidos"
              />
            </div>
            <p style={{color: "red"}}> {formErrors.apellidos} </p>
            <div className="form-group">
              <label htmlFor="cedula" className="form-label mt-2">Número de cédula</label>
              <input 
                id = "cedula" 
                name = "cedula"
                type = "text" 
                maxLength = "10"
                value = {formValues.cedula}
                onChange = {handleInputChange}
                className="form-control" 
                placeholder="Ingrese su número de cédula"
              />
            </div>
            <p style={{color: "red"}}> {formErrors.cedula} </p>
            <div className="form-group">
              <label htmlFor="correo" className="form-label mt-2">Correo Electrónico</label>
              <input 
                id="correo" 
                name = "correo"
                value = {formValues.correo}
                onChange = {handleInputChange}
                type="email" 
                maxLength="40"
                className="form-control" 
                placeholder="Ingrese su correo electrónico"
              />
            </div>
            <p style={{color: "red"}}> {formErrors.correo} </p>

            <div className="d-grid gap-2 mt-3">
              <button 
                type="submit"
                className="btn btn-outline-success"
                >
                Agregar Empleado
              </button>
            </div>
            
          </form>
          
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-outline-danger" onClick={cleanForm}> Limpiar Valores</button>
          </div>
        
        </div>
      </div>
    </>
  )
}