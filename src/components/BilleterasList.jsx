import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';

import "../assets/styles/components/BilleteraList.scss";

import useGetBilleteras from '../custom-hooks/useGetBilleteras'
import BilleteraCard from './BilleteraCard';
import {setActive, setNuevaBilletera,setPageSection} from '../actions/index';


const BilleterasList = (props) => {

    const dispatch = useDispatch();

    const { billeteraActiva ,actualizarIndex, pageSection } = props;

    const {billeteras, loading, error, getBilleteras, postFavoritoBilletera, deleteBilletera} = useGetBilleteras();
   
   
    useEffect(() => {
        getBilleteras();
    },[actualizarIndex,billeteraActiva,pageSection])


     const handleSetActivo = (id,nombre,monto) => {
       
        dispatch( setActive({
            id: id,
            nombre: nombre,
            monto: monto
        }));
        dispatch(setPageSection('Transferencias'));
    }

    const nuevaBilletera = () => {

        dispatch( setNuevaBilletera({
            id: 0,
            nombre: 'Nueva Billetera',
            monto: 0
        }));
        dispatch(setPageSection('Billetera'));

    }

    const cambioSectionDeleteBilletera = (id) => {
    
        deleteBilletera(id);
        dispatch(setPageSection('Billetera'));
    }

    return (
        <div className="lista">
            <div className="nueva-billetera" >
                <div className="mis-billeteras">
                    <p >
                        Mis Billeteras
                    </p>
                </div>
                <div className="agregar" onClick={nuevaBilletera}>
                        +
                </div>
                    
            </div>
            <div className="lista-billeteras">
                <div className="seccion">
                    <h3>
                        FAVORITAS
                    </h3>
                </div>
                {loading ? (
                    <h2>Cargando</h2>
                ) : error ? (
                    <h3>Error</h3>
                ) : (
                    <div className="billeteras-card">
                        {billeteras.filter(billetera => billetera.favorito == 1).length > 0 ? 
                            billeteras.filter(billetera => billetera.favorito == 1).map(({id, favorito, ...otherBilleteraProps}) => 
                                (   
                                    <BilleteraCard  
                                    key={id} 
                                        data={otherBilleteraProps} 
                                        id={id} 
                                        favorito={favorito} 
                                        handleSetActivo={handleSetActivo} 
                                        postFavoritoBilletera={postFavoritoBilletera} 
                                        deleteBilletera={cambioSectionDeleteBilletera}

                                        billeteraActiva={billeteraActiva}
                                        
                                    />
                                ))
                            :
                            <h3 className="no-billeteras">No hay billeteras</h3>
                        }
                    </div>
                )} 
                
                
                <div className="seccion" style={{marginTop: '20px'}}>
                    <h3>
                        BILLETERAS
                    </h3>
                </div>
                {loading ? (
                    <h2>Cargando</h2>
                ) : error ? (
                    <h3>Error</h3>
                ) : (
                    <div className="billeteras-card">
                        {billeteras.filter(billetera => billetera.favorito == 0).length > 0 ? 

                                billeteras.filter(billetera => billetera.favorito == 0).map(({id, favorito, ...otherBilleteraProps}) => 
                                    (   
                                        
                                        
                                            <BilleteraCard 
                                            key={id}  
                                                data={otherBilleteraProps} 
                                                id={id} 
                                                favorito={favorito} 
                                                handleSetActivo={handleSetActivo} 
                                                postFavoritoBilletera={postFavoritoBilletera} 
                                                deleteBilletera={cambioSectionDeleteBilletera}
                                                billeteraActiva={billeteraActiva}
                                            />
                                        
                                    ))
                                : 

                                <h3 className="no-billeteras">No hay billeteras</h3>
                        }
                    </div>
                )} 
                    
                     

            </div>
        </div>
    )
}

// Native functions react-redux (HOC)
const mapStateToProps = (state) => {
    return {
        billeteraActiva: state.billeteraActiva,
        actualizarIndex: state.actualizarIndex,
        pageSection: state.pageSection,
    };
  };
  
  const mapDispatchToProps = {
    setActive,
    setNuevaBilletera,
    setPageSection,
  };

export default connect(mapStateToProps, mapDispatchToProps)(BilleterasList);
