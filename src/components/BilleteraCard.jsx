import React from 'react'

import "../assets/styles/components/BilleteraCard.scss";
import propTypes from "prop-types";

import StarSvg from "../assets/static/components/StarSvg";
import TrashSvg from "../assets/static/components/TrashSvg";



const BilleteraCard = (props) => {

    
    const { data } = props;

    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    });
    const truncate = (str, num) => {
        if(str.length > 25) return str.slice(0,25) + "...";

        return str;
    }

    let activa = props.billeteraActiva ? props.billeteraActiva.id == props.id : false;
   
    return (

        

        <div className={`card-billetera ${ activa ? 'activa' : ''}`}>
            <div className="contenido" onClick={() => props.handleSetActivo(props.id,props.data.nombre,props.data.monto) }>
                <div className="datos">
                    <p className="nombre">{truncate(props.data.nombre,25)}</p>
                    <p className="monto">{formatterPeso.format(props.data.monto)}</p>
                </div>
            </div>
            <div className="acciones">
                    <div className="favorito" onClick={() => props.postFavoritoBilletera({billetera_id:props.id, favorito:props.favorito})}>
                    <StarSvg favorito={props.favorito}/>
                    
                    </div>
                    <div className="borrar" onClick={() => props.deleteBilletera(props.id)}>
                    <TrashSvg />
                    </div>
            </div>
        </div>
    )
}

BilleteraCard.propTypes = {
    data: propTypes.object,
  };

export default BilleteraCard
