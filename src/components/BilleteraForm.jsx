import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';

import '../assets/styles/components/BilleteraForm.scss'

import {setActualizarIndex} from '../actions/index';
import useGetBilleteras from '../custom-hooks/useGetBilleteras';


const BilleteraForm = (props) => {


    const dispatch = useDispatch();


    const {actualizarIndex} = props;

    const  {postGuardarBilletera } = useGetBilleteras();

    const [datos, setDatos] = useState({
        nombre: props.nombre ?? '',
        monto: props.monto ?? 0,
    })
    
    useEffect(() => {
        setDatos({
            nombre: props.nombre ?? '',
            monto: props.monto ?? 0
        })
        
    }, [props.billetera_id])

    const handleInputChange = (event) => {

        switch (event.target.name){
            case 'nombre':
                if(event.target.value.length < 1 || event.target.value.length > 40){
                    return false;    
                }
                break;
            case 'monto':
                    if(event.target.value == "" || event.target.value == "-" || event.target.value == 0){
                        
                    }else{
                        
                        if(!parseInt(event.target.value)  || event.target.value.length > 12){
                            return false;    
                        }
                    }

                    break;
            default:
                break;
        }




        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        });
    }

    const enviarDatos = (event) =>{
        event.preventDefault();



        postGuardarBilletera(
            {
                billetera_id:props.billetera_id ,
                ...datos}
        ).then(()=>{
            if(actualizarIndex == 0){
                dispatch(setActualizarIndex(1));
            }else{
                dispatch(setActualizarIndex(0));
            }
        });

    }






    return (
        <form className="formulario" onSubmit={enviarDatos}>
            <h2>
                 
                    
                {props.billetera_id > 0 ?
                    (
                        <>
                            Editar Billetera 
                        </>
                    ) 
                    :
                    (
                        <>
                            Agregar Una Nueva Billetera
                        </>
                    )
                }
            </h2>
            <div className="section-input">

            <div className="group">      
                <input 
                    type="text" 
                    name="nombre"
                    value={datos.nombre}
                    onChange={handleInputChange}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Nombre</label>
            </div>
            
            <div className="group">      
                <input 
                    type="text" 
                    name="monto"
                    value={datos.monto}
                    onChange={handleInputChange}
                
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Monto</label>
            </div>
            </div>
            


            <button
                type="submit"
            >
                Guardar
            </button>
        </form>
    )
}

// Native functions react-redux (HOC)
const mapStateToProps = (state) => {
    return {
        actualizarIndex: state.actualizarIndex,
    };
  };
  
  const mapDispatchToProps = {
    setActualizarIndex,
  };

export default connect(mapStateToProps, mapDispatchToProps)(BilleteraForm);



