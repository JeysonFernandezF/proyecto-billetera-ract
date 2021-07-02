

const reducer = (state, action) => {
  
    switch(action.type){
        case 'SET_ACTIVE':
            return {
                ...state,
                billeteraActiva: action.payload
            }
        case 'SET_SECTION':
            return {
                ...state,
                sectionActive: action.payload
            }
        case 'SET_PAGE_SECTION':
            return {
                ...state,
                pageSection: action.payload
            }
        case 'SET_MONTO_BILLETERA':
            return {
                ...state,
                billeteraActiva: {...state.billeteraActiva,monto: action.payload}
            }
        case 'SET_NUEVA_BILLETERA':
            return {
                ...state,
                billeteraActiva: action.payload
            }
        case 'ACTUALIZAR_INDEX':
            return {
                ...state,
                actualizarIndex: action.payload
            }
        case 'ESTADO_PAGINA':
            return {
                ...state,
                estadoPagina: action.payload
            }
        default:
            return state;
    }
}

export default reducer
