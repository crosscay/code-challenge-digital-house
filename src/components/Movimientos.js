import React, { useEffect, useContext } from 'react';
import { StyleSheet, FlatList, SafeAreaView, View  } from 'react-native'
import  ProductosContext from '../context/productosContext';
import ProductoItem from './ProductoItem';
import _ from 'lodash';
  
const Movimientos = () => {
  // Context de Productos 
  const { movimientosfiltrados, obtenerProductos } = useContext(ProductosContext);
  
  useEffect(() => {
    obtenerProductos();
  },[]);

  return ( 
      <>
        <SafeAreaView style={styles.container}>
          <FlatList
            ItemSeparatorComponent={() => {
              return (<View style={{height: 8, backgroundColor: 'white'}} />);
            }}
            data={movimientosfiltrados}
            renderItem={({item}) => 
            <ProductoItem 
              createdAt={item.createdAt} 
              product={item.product}
              points={item.points} 
              image={item.image} 
              is_redemption={item.is_redemption}
              id={item.id}
            />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 10
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});
 
export default Movimientos;