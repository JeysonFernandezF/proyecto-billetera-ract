import React, { Fragment, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import '../assets/styles/components/PageSection.scss'

import TransferForm from './TransferForm'
import TransferTable from './TransferTable'

import useGetTransferencias from '../custom-hooks/useGetTransferencias'
import BilleteraForm from './BilleteraForm'

import {setPageSection} from '../actions/index'



const PageSection = (props) => {

    const dispatch = useDispatch();

    const { pageSection } = props;

    const {id, nombre, monto} = useSelector((state) => state.billeteraActiva);

    const {transferencias, loading, error, getTransferencias, postTransferencia, deleteTransferencia}= useGetTransferencias();
    
    
    useEffect(() => {
        getTransferencias(id);
        
    },[id]);

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
        <div className='section'>
            { pageSection == 'Billetera' ?
            (
               <BilleteraForm billetera_id={id} nombre={nombre} monto={monto}/>  
            ) 
            :
            
            (
                <Fragment>
                    <div className="form-section">
                        <div className="datos-billetera">
                            <h3 className="nombre">{truncate(nombre,25)}</h3>
                            <div className="monto">
                                <h5 className="balance">Balance Actual</h5>
                                <h4 className="monto">{formatterPeso.format(monto)}</h4>
                            </div>
                            <button onClick={() => dispatch(setPageSection('Billetera'))}> Editar</button>
                        </div> 
                        <TransferForm tiulo="Nueva Billetera" postTransferencia={postTransferencia} monto={monto} billetera_id={id}/>
                    </div>
                    
                    <TransferTable 
                        deleteTransferencia={deleteTransferencia} 
                        billetera_id={id} 
                        billetera_monto={monto}
                        transferencias={transferencias} 
                        loading={loading} 
                        error={error}
                    />
                </Fragment>
            )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pageSection: state.pageSection,
    };
  };
  
  const mapDispatchToProps = {
    setPageSection,
  };

export default connect(mapStateToProps, mapDispatchToProps)(PageSection);

