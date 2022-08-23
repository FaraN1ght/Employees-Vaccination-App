import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { addEmp, editEmp, getEmpById, getEmpList } from "../services/localstorage";

export const useForm = (initialForm) => {
    
    const [formValues, setFormValues] = useState(initialForm);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const { id } = useParams();

    //LIMPIA EL FORM
    const cleanForm = () => {
        setFormValues(initialForm);
    }

    //GUARDA LO EDITADO EN LA LISTA
    const setEditForm = (newValues) => {
        setFormValues(newValues);
    }

    //CONTROLA LOS INPUT DEL FORM EN TIEMPO REAL
    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    //CONTROLA EL SUBMIT DEL FORM Y AGREGA UN EMPLEADO
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(formValues));
        setIsSubmit(true);
    }

    //COMPRUEBA QUE NO HAYA ERRORES Y AGREGA O EDITA
    useEffect( () => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            id ? editEmp(id, formValues) : addEmp(formValues);
        }
    }, [formErrors]);

    //COMPRUEBA EL ID A EDITAR Y LO MANDA A LA LISTA
    useEffect( () => {
        if (id) {
          const employee = getEmpById(id);
          setEditForm(employee);
        }
    }, [id]);

    //VALIDACIONES CON REGEX ADMINISTRADOR
    const validateForm = (value) => {
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexCI = /^[0-9\b]+$/;

        if (!value.nombres.trim()) {
            errors.nombres = "Campo obligatorio, llene los nombres...";
        }else if (!regexName.test(value.nombres.trim())) {
            errors.nombres = "Digite un nombre válido";
        }

        if (!value.apellidos.trim()) {
            errors.apellidos = "Campo obligatorio, llene los apellidos...";
        }else if (!regexName.test(value.apellidos.trim())) {
            errors.apellidos = "Digite un apellido válido";
        }

        if (!value.cedula.trim()) {
            errors.cedula = "Campo obligatorio, llene la cedula...";
        }else if (!regexCI.test(value.cedula.trim())) {
            errors.cedula = "La cédula debe contener sólo números"
        }else if (value.cedula.trim().length < 10) {
            errors.cedula = "La cédula debe contener 10 dígitos";
        }

        if (!value.correo.trim()) {
            errors.correo = "Campo obligatorio, llene el correo...";
        }else if (!regexEmail.test(value.correo.trim())) {
            errors.correo = "Digite un correo electrónico válido";
        }

        return errors;
    };
    
    return {
        formValues,
        formErrors,
        isSubmit,
        cleanForm,
        handleInputChange,
        handleSubmit,
    }

};
