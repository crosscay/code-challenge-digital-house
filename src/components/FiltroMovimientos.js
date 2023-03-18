import React, { useState, useContext } from 'react';
import { Button, View, StyleSheet } from  'react-native';
import _ from 'lodash';

import  ProductosContext from '../context/productosContext';

const FiltroMovimientos = () => {
    const [todos, cambiarTodos] = useState(true);
    // Context de Productos 
    const { movimientostodos, filtrarMovimientos} = useContext(ProductosContext);

    const filtrarGanados = () => {
        cambiarTodos(true);
        const puntosProductosGanados =_.filter(movimientostodos, function(item) {
            return item.is_redemption === false;
        });
        filtrarMovimientos(puntosProductosGanados);
    }

    const filtrarCanjeados = () => {
        cambiarTodos(true);
        const puntosProductosCanjeados =_.filter(movimientostodos, function(item) {
            return item.is_redemption === true;
        });
        filtrarMovimientos(puntosProductosCanjeados);
    }

    const obtenerProductosTodos = () => {
        // cambiar el estado todos para ocultar el boton Todos
        cambiarTodos(false);
        // seteamos el context de los movimientos a su valor inicial
        filtrarMovimientos(movimientostodos);
    }
    
    return ( 
        <>
            { todos === true && (
                <View style={{ marginLeft: 20, marginRight: 20}}>
                    <Button
                    title="Todos"
                    onPress={()=>{obtenerProductosTodos()}}
                    color="#334FFA"
                    accessibilityLabel="Todos"
                    />
                </View>
                
            )}

            { !todos && (
                <View style={styles.item}>
                    <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', marginLeft: 20, marginRight: 20 }}>
                            <Button
                                title="Ganados"
                                onPress={()=>{filtrarGanados()}}
                                color="#334FFA"
                                accessibilityLabel="Ganados"/>
                        </View>

                        <View style={{ flex: 1, alignSelf: 'stretch', marginLeft: 20, marginRight: 20 }}>
                            <Button
                                title="Canjeados"
                                onPress={()=>{filtrarCanjeados()}}
                                color="#334FFA"
                                accessibilityLabel="Canjeados"/>
                        </View>
                    </View>
                </View>
            )}
            
        </>
     );
}

const styles = StyleSheet.create({
    buttonTodos: {
        marginLeft: 20,
        marginRight: 20
    },
    buttonFiltro: {
        marginLeft: 20,
        marginRight: 20
    },
    item: {
      backgroundColor: '#fff',
      padding: 0,
      marginVertical: 0,
      marginHorizontal: 0,
    }
});
 
export default FiltroMovimientos;