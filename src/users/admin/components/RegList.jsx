import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getEmpList } from '../services/localstorage';
import { RegBody } from './RegBody';
import { RegHeader } from './RegHeader';

export const RegList = () => {

  const [emp, setEmp] = useState([]);
  const navigate = useNavigate();

  //OBTENER LA LISTA DE EMPLEADOS
  useEffect( () => {
    setEmp(getEmpList());
  }, []);

  return (
    <div>
      <button 
          className="btn btn-outline-warning my-4"
          onClick={() => navigate("/admin")}
      > VOLVER 
      </button>
        
      <h1 className="text-center mb-4">LISTA DE EMPLEADOS</h1>
      
      {
        emp.length > 0 ? (
          <div className="card bg-light p-3">
            <div className='table-responsive'>
              <table className="table table-hover">
                
                <thead>
                  <RegHeader/>
                </thead>
    
                <tbody>
                  {emp.map(employee => 
                    <RegBody 
                      key = {employee.id}
                      employee = {employee}
                      setEmployee = {setEmp}
                  />)}
                </tbody>
                
              </table>
            </div>
          </div>
        ) : (
          <div className="alert alert-dismissible alert-danger">
            <h3 className="text-center">NO HAY EMPLEADOS</h3> 
          </div>
        )
      }
    </div>
  )
}
