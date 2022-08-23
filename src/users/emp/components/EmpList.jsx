import { useNavigate } from "react-router-dom"
import { useForm } from "../../admin/hooks/useForm";
export const EmpList = () => {


  const navigate = useNavigate();

  const initialForm = {
    cedula: '',
    nombres: '',
    apellidos: '',
    correo: '',
    fecha_nac: '',
    dir: '',
    telf: '',
    estado_vac: '',
    vacuna: '',
    fecha_vac: '',
    n_dosis: '',
  };

  const { formValues,
    formErrors,
    isSubmit,
    cleanForm,
    handleSubmit,
    handleInputChange,
  } = useForm(initialForm);

  const activateOpt = () => {
    if( document.getElementById("estado_vac").value == "Vacunado" ) { 
        document.getElementById("vacuna").disabled = false;
        document.getElementById("fecha_vac").disabled = false;
        document.getElementById("n_dosis").disabled = false;
    }else {
        document.getElementById("vacuna").disabled = true;
        document.getElementById("fecha_vac").disabled = true;
        document.getElementById("n_dosis").disabled = true;
    }
  }

  return (
    <>
      <div>
        <button 
          className="btn btn-outline-warning my-4"
          onClick={() => navigate("/emp")}
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
          <h1 className="text-center mb-4">EDITAR MI PERFIL</h1>
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

            <div className="form-group">
              <label htmlFor="fecha_nac" className="form-label mt-2">Fecha de Nacimiento</label>
              <input 
                id="fecha_nac" 
                name = "fecha_nac"
                value = {formValues.fecha_nac}
                onChange = {handleInputChange}
                type="date" 
                maxLength="40"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dir" className="form-label mt-2">Dirección</label>
              <input 
                id="dir" 
                name = "dir"
                value = {formValues.dir}
                onChange = {handleInputChange}
                type="text" 
                maxLength="40"
                className="form-control" 
                placeholder="Ingrese su correo electrónico"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telf" className="form-label mt-2">Teléfono</label>
              <input 
                id="telf" 
                name = "telf"
                value = {formValues.telf}
                onChange = {handleInputChange}
                type="text" 
                maxLength="40"
                className="form-control" 
                placeholder="Ingrese su correo electrónico"
              />
            </div>

            <div className="form-group">
              <label htmlFor="estado_vac" className="form-label mt-2">Estado de Vacunación</label>
              <select 
                className="form-select" 
                id="estado_vac" 
                name="estado_vac"
                onChange={activateOpt}
                onClick = {handleInputChange}>
                <option value="">Seleccione una opción</option>
                <option value="Vacunado">Vacunado</option>
                <option value="No Vacunado">No Vacunado</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="vacuna" className="form-label mt-2">Nombre de Vacuna</label>
              <select 
                className="form-select" 
                id="vacuna" 
                name="vacuna"
                value = {formValues.vacuna}
                disabled
                onChange = {handleInputChange}>
                <option value="">Seleccione una opción</option>
                <option value="Sputnik">Sputnik</option>
                <option value="AstraZeneca">AstraZeneca</option>
                <option value="Pfizer">Pfizer</option>
                <option value="JhonsonyJhonson">Jhonson&Jhonson</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fecha_vac" className="form-label mt-2">Fecha de Vacunación</label>
              <input
                id="fecha_vac" 
                name = "fecha_vac"
                disabled
                value = {formValues.fecha_vac}
                onChange = {handleInputChange}
                type="date" 
                maxLength="40"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="n_dosis" className="form-label mt-2">Número de Dosis</label>
              <select 
                className="form-select" 
                id="n_dosis" 
                name="n_dosis"
                value = {formValues.n_dosis}
                disabled
                onChange = {handleInputChange}>
                <option value="">Seleccione una opción</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="d-grid gap-2 mt-3">
              <button 
                type="submit"
                className="btn btn-outline-success"
                >
                Guardar Cambios
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
