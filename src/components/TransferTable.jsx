import React from 'react'
import { connect, useDispatch } from 'react-redux';

import '../assets/styles/components/TransferTable.scss';

import TransferCard from './TransferCard'
import {setMontoBilletera} from '../actions/index';


const TransferTable = (props) => {

    const dispatch = useDispatch();

    const deleteTransferencia= (id, monto) => {

        
        const monto_billetera = parseInt(props.billetera_monto) + parseInt(-monto);
        dispatch(setMontoBilletera(monto_billetera));
        props.deleteTransferencia(props.billetera_id, monto_billetera, id);
        
    }


    return (
        <div className="transfer-section">
            <h3>Transferencias realizadas</h3>
            {props.loading ? (
                    <h2>Cargando</h2>
                ) : props.error ? (
                    <h3>Error</h3>
                ) : (
                    <div className="transfers-list">
                    {
                        props.transferencias.length > 0 ? 
                        props.transferencias.map(({id, ...otherTransferenciaProps}) => 
                            (   
                                <div key={id} >
                                    <TransferCard deleteTransferencia={deleteTransferencia} id={id} data={otherTransferenciaProps} />
                                </div>
                            ))
                        :
                        <h3 className="no-billeteras">No hay billeteras</h3>
                    }
                    </div>
                )}   
        </div>
    )
}

// Native functions react-redux (HOC)

  
const mapDispatchToProps = {
    setMontoBilletera,
};

export default connect(null, mapDispatchToProps)(TransferTable);


