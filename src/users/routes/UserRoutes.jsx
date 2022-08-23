import { Navigate, Route, Routes } from "react-router-dom";

import { NavBar } from "../../ui";
import { RegForm, RegList } from "../admin/components/";
import { EmpPage } from "../../users";
import { AdminPage } from "../../users";
import { EmpForm } from "../emp/components";
import { EmpList } from "../emp/components/EmpList";
//////////CORREGIIIIIIIIIIIIIIIR EL EMPPPFORM POR EMMPAGE
export const UserRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className="container">
            <Routes>
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/emp" element={<EmpForm/>} />
                
                <Route path="/listar-empleado" element={<RegList />} />
                <Route path="/crear-empleado" element={<RegForm />} />
                <Route path="/editar-empleado/:id" element={<RegForm />} />
                <Route path="/editar-perfil/:id" element={<EmpList/>} />
                <Route path="/" element={<Navigate to='/admin'></Navigate>} />
            </Routes>
        </div>
    </>
  )
}
