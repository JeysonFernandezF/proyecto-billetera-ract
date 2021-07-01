
//SECCIÓN GENERAL
export const setActive = (payload) => ({
    type: 'SET_ACTIVE',
    payload,
})


//Seccion Page
export const setPageSection = (payload) => ({
    type: 'SET_PAGE_SECTION',
    payload
})

//Billetera
export const setMontoBilletera =  (payload) => ({
    type: 'SET_MONTO_BILLETERA',
    payload,
})

export const setNuevaBilletera = (payload) => ({
    type: 'SET_NUEVA_BILLETERA',
    payload,
})

export const setActualizarIndex = (payload) => ({
    type: 'ACTUALIZAR_INDEX',
    payload,
})