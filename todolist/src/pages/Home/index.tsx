import React, { useState } from 'react';
import './style.css';
import { gql, useQuery } from '@apollo/client';

import LateralMenu from '../components/LateralMenu';
import TodoCard from '../components/TodoCard';

interface ITodo {
    id: string;
    name: string;
    description: string;
    done: boolean;
    hours: string;
    created_at?: Date;
    updated_at?: Date;
}

export const GET_TODOS = gql`
{
    todos {
        id 
        name,
        hours,
        description,
        done
        created_at,
        updated_at
    }
}
`;

const Home = () => { 

    const [items, setItems] = useState<ITodo[]>([]);

    const {loading, error, data} = useQuery(GET_TODOS);        

    if(loading) return <p>Loading...</p>
    if(error) return <p>error</p>

    return (
        <div className="main">
            <div className="lateral">
                <LateralMenu />
            </div>                                                
 
            <div className="create">
                <ul className="list"> 
                    {
                        data.todos && data.todos.map(
                            (todo: ITodo) => 
                            (
                               <TodoCard hours={todo.hours} name={todo.name} id={todo.id} description={todo.description} done={todo.done} created_at={todo.created_at} updated_at={todo.updated_at}/>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Home;