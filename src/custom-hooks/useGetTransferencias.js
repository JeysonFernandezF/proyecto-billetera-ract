import axios from 'axios';
import React, { useState } from 'react'
import { url_base } from '../bd';

const useGetTransferencias = () => {
    const [transferencias, setTransferencias] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getTransferencias(id){
        try{
            const response = await axios.post(
                `${url_base}/transferencia/billetera`,
                {
                    billetera: id
                }
                
            )

            const result = response.data
            setTransferencias(result);
            setLoading(false);
            setError(false);   
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    async function postTransferencia({nombre, monto, billetera_id,monto_billetera}){
        try{
            const response = await axios.post(
                `${url_base}/transferencia/save`,
                {
                    nombre: nombre,
                    monto: monto,
                    billetera_id: billetera_id,
                    monto_billetera: monto_billetera
                }
            )

            setLoading(false);
            setError(false);   

            getTransferencias(billetera_id)

        }catch(error){
            setLoading(false);
            setError(error);
        }
    }

    async function deleteTransferencia(billetera_id, monto_billetera, id_transferecia){
        try{
            const response = await axios.post(
                `${url_base}/transferencia/delete`,
                {
                    id: id_transferecia,
                    billetera_id: billetera_id,
                    monto_billetera: monto_billetera
                }
            )

            getTransferencias(billetera_id)

        }catch(error){
            setLoading(false);
            setError(error);
        }
    }

    return {transferencias, loading, error, getTransferencias, postTransferencia,deleteTransferencia}
}

export default useGetTransferencias