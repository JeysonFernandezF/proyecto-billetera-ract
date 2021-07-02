import React from 'react'

import "../assets/styles/components/TransferCard.scss";

import TrashSvg from "../assets/static/components/TrashSvg";
import propTypes from "prop-types";

const TransferCard = (props) => {

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

    return (
        <div className="card-transferencia">
            <div className={`tipo ${data.monto >= 0 ? 'verde-borde' : 'rojo-borde'}`}>
                {
                    data.monto > 0 ?
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
            <div className="contenido" onClick={() => props.handleSetActivo(props.id,data.nombre,data.monto) }>
                <div className="datos">
                    <p className="nombre">{truncate(data.nombre, 30)}</p>
                    <p className={`monto ${data.monto >= 0 ? 'verde-texto' : 'rojo-texto'} `}>{formatterPeso.format(data.monto)}</p>
                    <p className="fecha">FECHA: {data.fecha}</p>
                </div>
            </div>
            <div className="acciones">
                    
                    <div className="borrar" onClick={() => deleteTransferencia(props.id,data.monto, )}>
                    
                    <TrashSvg />
                    </div>
            </div>
        </div>
    )
}

TransferCard.propTypes = {
    data: propTypes.object,
};

export default TransferCard
