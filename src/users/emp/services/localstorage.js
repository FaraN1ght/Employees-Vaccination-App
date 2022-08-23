import { getEmpList } from "../../admin/services/localstorage";

//BUSCAR USUARIO SEGUN CREDENCIALES PARA EMPLEADO
export const getUserByCred = (user, pass) => {
    const employees = getEmpList();
    const employee = employees.find(employee => employee.usuario === user && employee.contra === pass);
    return employee;
};

//EDITAR NUEVOS VALORES DEL EMPLEADO
export const editEmp = (id, newEmployee) => {
    let employees = getEmpList();
    employees = employees.filter(employee => employee.id !== id);
    employees.push(newEmployee);
    localStorage["@employees"] = JSON.stringify(employees);
};
