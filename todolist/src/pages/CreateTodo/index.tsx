import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import LateralMenu from '../components/LateralMenu';

import './style.css';

const CreateTodo = () => {

    const [seletedName, setSelectedName] = useState<String>('');
    const [seletedDescription, setSelectedDescription] = useState<String>('');
    const [seletedHour, setSelectedHour] = useState<String>('');    

    const CREATE_TODO = gql`
        mutation creteToDo(
            $name: String!
            $description: String!
            $hours: String!
        ){
            createToDo(
                data: {
                    name: $name
                    description: $description
                    hours: $hours 
                }
            ) {
                id
                name
                description  
                done          
                created_at
                updated_at
            }
        }
    `;

    const[createTodo] = useMutation(CREATE_TODO);

    const history = useHistory();

    function handleNameChange(event: ChangeEvent<HTMLInputElement>){
        const {value} = event.target;

        console.log('aqui')

        setSelectedName(value);
    }

    function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>){
        const {value} = event.target;

        console.log('aqui');

        setSelectedDescription(value);
    }

    function handleHourChange(event: ChangeEvent<HTMLInputElement>){
        const {value} = event.target;

        console.log('aqui');
        

        setSelectedHour(value);
    }



    async function HandleSubmit(event: FormEvent){
        event.preventDefault();

        const name = seletedName;
        const hours = seletedHour;
        const description = seletedDescription;        

        const data = {
            name,
            hours,
            description
        }
        
        try{
            createTodo({variables: data});

            alert('Tarefa criada: ');

            history.push('/');
        } catch (err) {
            alert('Erro na criação da tarefa:\n Erro: ');
        }
       
    }

    return (
        <div className="main">    
           <div className="lateral">
                <LateralMenu />                
            </div>            

            <div className="create">
                <div className="form">
                    <div className="title">       
                        <h1>Crie a sua tarefa</h1>
                    </div>
                
                    <form onSubmit={HandleSubmit}>
                        <fieldset>
                            <legend>Informações</legend>
                        
                            <div className="field">
                                <label htmlFor="name" id="label1">Nome da tarefa</label>
                                <input type="text" name="name" id="name" onChange={handleNameChange}/>

                                <label htmlFor="description">Descrição</label>
                                <input type="text" name="description" id="description" onChange={handleDescriptionChange}/>

                                <label htmlFor="hours">Hora</label>
                                <input type="text" name="hours" id="hours" onChange={handleHourChange}/>                            
                            </div>
                        </fieldset>
                        
                        <button type="submit">
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTodo;