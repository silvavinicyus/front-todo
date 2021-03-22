import React from 'react';
import profilePhoto from '../../../assets/perfil.jpeg';
import './style.css';
import {Link} from 'react-router-dom';


const LateralMenu = () => {
    return (
        <div className="principal">            
            <div id="profile">
                <div id="details">
                    <img src={profilePhoto} alt="Profile">
                    
                    </img>

                    <strong id="name">
                        Vinícyus 
                    </strong>
                </div> 

                <div id="leave">
                    <strong>
                        Sair
                    </strong>
                </div>                
            </div> 

            <div className="column">
                <div id="item">
                    <Link to="/" id = "button1"> 
                        <strong>
                            Listar
                        </strong>                        
                    </Link>

                    <Link to="/create-todo" id = "button2"> 
                        <strong>
                            Cadastrar
                        </strong>                        
                    </Link>                    
                </div>
            </div>          
        </div>
    ); 
}

export default LateralMenu;