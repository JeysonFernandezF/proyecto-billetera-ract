import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';

import '../assets/styles/components/TransferForm.scss';

import {setMontoBilletera,setActualizarIndex} from '../actions/index';


const TransferForm = (props) => {

    const dispatch = useDispatch();

    
    const {actualizarIndex} = props;

    const [datos, setDatos] = useState({
        nombre: 'Nueva Transferencia',
        monto: 0,
    })
    

    const handleInputChange = (event) => {

        switch (event.target.name){
            case 'nombre':
                if(event.target.value.length < 1 || event.target.value.length > 40){
                    return false;    
                }
                break;
            case 'monto':
                    if(event.target.value.length < 1 || event.target.value.length > 6){
                        return false;    
                    }

                    event.target.value = parseInt(event.target.value);

                    break;
            default:
                break;
        }

        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) =>{
        event.preventDefault();
        const monto_billetera = parseInt(props.monto) + parseInt(datos.monto)
        dispatch(setMontoBilletera(monto_billetera));

        setDatos({
            nombre:'Nueva Transferencia',
            monto: 0
        });

        props.postTransferencia({billetera_id: props.billetera_id,monto_billetera: monto_billetera, ...datos})
        
        if(actualizarIndex == 0){
            dispatch(setActualizarIndex(1));
        }else{
            dispatch(setActualizarIndex(0));
        }
        

    
        

        
    }

    return (
        
        <form className="formulario-transferencia" onSubmit={enviarDatos}>
            <h2>
                Agregar Una Nueva Transferencia
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
                    type="number" 
                    type="number" 
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
      favoriteCharacters: state.favoriteCharacters,
      actualizarIndex: state.actualizarIndex,
    };
  };
  
  const mapDispatchToProps = {
    setMontoBilletera,
    setActualizarIndex
  };

  

export default connect(mapStateToProps, mapDispatchToProps)(TransferForm);
