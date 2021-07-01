import axios from 'axios';
import React, { useState } from 'react'
import { url_base } from '../bd';

const useGetBilleteras = () => {
    const [billeteras, setBilleteras] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getBilleteras(){
        try{
            const response = await axios.get(
                `${url_base}/billetera/index`
            )

            const result = response.data
            
            setBilleteras(result);
            
            setLoading(false);
            setError(false);       
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    async function postGuardarBilletera({nombre, monto, billetera_id}){
        try{
            await axios.post (
                `${url_base}/billetera/save`,
                {
                    nombre: nombre,
                    monto: monto,
                    billetera_id: billetera_id,
                }
            )

            
            setLoading(false);
            setError(false);    

        }catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    async function postFavoritoBilletera({billetera_id, favorito}){

        
        try{
            const response = await axios.post(
                `${url_base}/billetera/favorito`,
                {
                    billetera_id: billetera_id,
                    favorito: favorito
                }
            )
            setLoading(false);
            setError(false);    

            getBilleteras();
        }catch (error) {
            setLoading(false);
            setError(error);
        
        }
    }

    async function deleteBilletera(billetera_id){
        try{
            const response = await axios.post(
                `${url_base}/billetera/delete`,
                {
                    
                    billetera_id: billetera_id,
                }
            )

            setLoading(false);
            setError(false);   
            getBilleteras();

        }catch(error){
            setLoading(false);
            setError(error);
        }
    }

    return {billeteras, loading, error, getBilleteras, postGuardarBilletera, postFavoritoBilletera, deleteBilletera}
}

export default useGetBilleteras
