import React, { useContext } from 'react';
import ProductosContext from '../context/productosContext';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
  } from 'react-native';
import Card from './Card';
import Meses from '../utilities/Meses';

const Puntos = () => {
    // Context de Productos 
    const { puntosganados } = useContext(ProductosContext);

    const meses = Meses;
    const date = new Date();
    const mes_name = date.getMonth();

    return ( 
        <>  
            <SafeAreaView style={styles.container}>
                <Card style={styles.card}>
                    <View>
                        <Text style={styles.sectionMonth}>{ meses[mes_name] }</Text>
                    </View>
                    <Text style={styles.sectionPoints}>{ puntosganados  } pts</Text>
                </Card>
            </SafeAreaView>
        </>
     );
}
 
const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        marginLeft: 45,
        marginRight: 45,
        marginBottom: 10,
        alignItems: 'center', // Centered horizontally
    },
    sectionMonth: {
        fontSize: 16,
        fontWeight: '800',
        color: '#FFFFFF',
        left: -75,
        top: -35
    },
    sectionPoints: {
      fontSize: 24,
      color: '#FFFFFF',
      position: 'absolute',
      fontStyle: 'normal',
      lineHeight: 44,
      fontWeight: '800'
    },
    card: {
      height: 130,
      width: '100%',
      backgroundColor: '#334FFA',
      justifyContent: 'center', //Centered vertically
      alignItems: 'center', // Centered horizontally
    },
});

export default Puntos;