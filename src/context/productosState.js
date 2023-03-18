import React, { useReducer } from 'react';
import ProductosReducer from './productosReducer';
import ProductosContext from './productosContext';
import { OBTENER_PRODUCTOS_EXITO, FILTRAR_MOVIMIENTOS, OBTENER_PUNTOS_GANADOS } from '../types';
import _ from 'lodash';

const ProductosState = props => {
    // Crear state inicial
    const initialState = {
        movimientostodos: [],
        movimientosfiltrados: [],
        puntosganados: 0,
    }

    // useReducer con dispatch para ejecutar las funciones
    const [ state, dispatch ] = useReducer(ProductosReducer, initialState);

    // Función para obtener los productos
    const obtenerProductos = async () => {
        const url = `https://6222994f666291106a29f999.mockapi.io/api/v1/products`;
        try {
            const respuesta = await fetch(url);
            const productos = await respuesta.json()
            // Tenemos resultados de la api
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: productos
            }); 
            await obtenerPuntosGanados(productos); 
            await filtrarGanados(productos); 
            
        } catch (error) {
            console.log(error);
        }
    }

    const filtrarGanados = productos => {
      const productosGanados =_.filter(productos, function(item) {
          return item.is_redemption === false;
      });
      filtrarMovimientos(productosGanados)
    }

    const obtenerPuntosGanados = listadoMovimientos => { 
        const puntosGanados =_.filter(listadoMovimientos,function(item) {
            return item.is_redemption === false;
        });
    
        const totalPuntosGnads = _.sumBy(puntosGanados, 'points');

        dispatch({
            type: OBTENER_PUNTOS_GANADOS,
            payload: totalPuntosGnads
        }); 
    }

    const filtrarMovimientos = productos => { 
        dispatch({
            type: FILTRAR_MOVIMIENTOS,
            payload: productos
        }); 
    }

    return (
        <ProductosContext.Provider
            value={{
                movimientostodos: state.movimientostodos,
                movimientosfiltrados: state.movimientosfiltrados,
                puntosganados: state.puntosganados,
                obtenerProductos,
                filtrarMovimientos
            }}
        >
            {props.children}
        </ProductosContext.Provider>
    )
}

export default ProductosState;