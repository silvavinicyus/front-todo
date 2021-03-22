import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import LateralMenu from '../components/LateralMenu';

import './style.css';

const CreateTodo = () => {

    const [seletedName, setSelectedName] = useState<String>('');
    const [seletedDescription, setSelectedDescription] = useState<String>('');
    const [seletedHour, setSelectedHour] = useState<String>('');

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



    function handleSubmit(event: FormEvent){
        event.preventDefault();

        const name = seletedName;
        const hour = seletedHour;
        const description = seletedDescription;

        const data = {
            name,
            hour,
            description
        }

       alert('Tarefa cadastrada');        

        history.push('/');
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
                

                    <form onSubmit={handleSubmit}>
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