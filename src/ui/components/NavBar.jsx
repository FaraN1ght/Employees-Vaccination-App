import { useNavigate } from "react-router-dom"

export const NavBar = () => {

    const navigate = useNavigate();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            
            <span className="navbar-brand" href="#" style={{fontSize : 34+'px'}}>CRUD APP</span>
            
            <button
                className="btn btn-outline-dark my-2 my-sm-0"
                style={{fontSize : 20+'px'}}
                onClick={() => navigate ('/login')}
                >
                CERRAR SESION</button>
        </div>      
    </nav>
    )
}