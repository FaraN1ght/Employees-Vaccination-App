import {v4 as uuidv4} from "uuid";

//OBTENER LISTA DE EMPLEADOS
export const getEmpList = () => {
    
    if(!localStorage["@employees"]){
        localStorage["@employees"] = JSON.stringify([]);
    }

    let emp = JSON.parse(localStorage["@employees"]);
    return emp;
};

//AGREGAR UN EMPLEADO
export const addEmp = (employee) => {
    const employees = getEmpList();
    employees.push({ id: uuidv4(), ...employee, usuario: uuidv4(), contra: uuidv4()});
    localStorage["@employees"] = JSON.stringify(employees);
};

//EDITAR UN EMPLEADO
export const editEmp = (id, newEmployee) => {
    let employees = getEmpList();
    employees = employees.filter(employee => employee.id !== id);
    employees.push(newEmployee);
    localStorage["@employees"] = JSON.stringify(employees);
};

//OBTENER UN EMPLEADO POR SU ID
export const getEmpById = (id) => {
    const employees = getEmpList();
    const employee = employees.find(employee => employee.id === id);
    return employee;
};

//ELIMINAR UN EMPLEADO
export const deleteEmp = (id) => {
    let employees = getEmpList();
    employees = employees.filter((employee) => employee.id !==id);
    localStorage["@employees"] = JSON.stringify(employees);
};

