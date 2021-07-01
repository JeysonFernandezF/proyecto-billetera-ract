import React from 'react'

import "../assets/styles/components/TransferCard.scss";

import TrashSvg from "../assets/static/components/TrashSvg";


const TransferCard = (props) => {

    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    });
    const truncate = (str, num) => {
        if(str.length > 25) return str.slice(0,25) + "...";

        return str;
    }

    return (
        <div className="card-transferencia">
            <div className={`tipo ${props.data.monto >= 0 ? 'verde-borde' : 'rojo-borde'}`}>
                {
                    props.data.monto > 0 ?
                    (
                        <div className="texto">
                            +
                        </div>
                    ) 
                    :
                    (
                        <div className="texto">
                            -
                        </div>
                    )
                }
            </div>
            <div className="contenido" onClick={() => props.handleSetActivo(props.id,props.data.nombre,props.data.monto) }>
                <div className="datos">
                    <p className="nombre">{truncate(props.data.nombre, 30)}</p>
                    <p className={`monto ${props.data.monto >= 0 ? 'verde-texto' : 'rojo-texto'} `}>{formatterPeso.format(props.data.monto)}</p>
                    <p className="fecha">FECHA: {props.data.fecha}</p>
                </div>
            </div>
            <div className="acciones">
                    
                    <div className="borrar" onClick={() => props.deleteTransferencia(props.id,props.data.monto, )}>
                    
                    <TrashSvg />
                    </div>
            </div>
        </div>
    )
}

export default TransferCard
