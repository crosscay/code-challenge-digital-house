import { OBTENER_PRODUCTOS_EXITO, FILTRAR_MOVIMIENTOS, OBTENER_PUNTOS_GANADOS } from '../types';

export default (state, action) => {
    switch (action.type) {
        case OBTENER_PRODUCTOS_EXITO:
            return { 
                ...state,
                movimientostodos: action.payload
            }
        case FILTRAR_MOVIMIENTOS:
            return {
                ...state,
                movimientosfiltrados: action.payload
            }
        case OBTENER_PUNTOS_GANADOS:
            return {
                ...state,
                puntosganados: action.payload
            }
        default:
            return state;
    }
}