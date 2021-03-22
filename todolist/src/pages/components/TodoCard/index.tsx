import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

interface IRequest {
    id: string;
    name: string;
    description: string;
    hours: string;
    done: boolean;
    created_at?: Date;
    updated_at?: Date;
}

const TodoCard = (props: IRequest) => {

    return (
        <div className="todo">
            <Link to="/" id = "button">            
                <li className="item-todo" key={props.id}>
                    <div className="dados">
                        <div className="name">                    
                            <p id='title'>
                                {
                                    props.name
                                }
                            </p>

                        </div>

                        <div className="hours">                                           
                            <p id='hour'>
                                {
                                    props.hours
                                }
                            </p>

                        </div>

                        <div className="description">                                   
                            <p id='desc'>
                                {
                                    props.description
                                }
                            </p>

                        </div>                        
                    </div>               
                </li>
            </Link>
        </div>
    )
}

export default TodoCard;