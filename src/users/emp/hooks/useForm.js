import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getUserByCred } from "../services/localstorage";

export const useForm = (credentials) => {
    
    const [formValues, setFormValues] = useState(credentials);
    const user = getUserByCred(formValues.user, formValues.pass);
    const navigate = useNavigate();

    //CONTROLA LA ENTRADA DE DATOS
    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    //CONTROLA EL SUBMIT DEL FORM Y AGREGA UN EMPLEADO
    const handleSubmit = (e) => {
        e.preventDefault();
        if( user != null ) {
            navigate(`/editar-perfil/${user.id}`);
        }else {
            return;
        }
    }
    
    return {
        handleInputChange,
        handleSubmit,
    }

};
