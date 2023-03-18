import React from 'react';
import Puntos from '../components/Puntos';
import Movimientos from '../components/Movimientos';
import Header from '../components/Header';
import FiltroMovimientos from '../components/FiltroMovimientos';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

const HomeScreen = () => {
    return ( 
        <>
            <SafeAreaView>
                <View style={styles.containerHeader}>
                    <Header/>
                </View>
                <View style={styles.sectionViewTitle}>
                    <Text style={styles.sectionTitle}>TUS PUNTOS</Text>
                </View> 
                <View style={styles.containerPoints}>
                    <Puntos />
                </View>
                <View style={styles.sectionViewTitle}>
                    <Text style={styles.sectionTitle}>TUS MOVIMIENTOS</Text>
                </View>
                <View style={styles.containerMovements}>
                    <Movimientos />   
                </View> 
                <View >
                    <FiltroMovimientos />
                </View> 
            </SafeAreaView> 
        </> 
    );
}

const styles = StyleSheet.create({
    containerHeader: {
        marginTop:28,
        marginBottom: 10,
    },
    containerPoints: {
        marginTop:15,
        marginBottom: 0,
    },
    containerMovements: {
        marginTop: 15,
        marginBottom: 0,
    },
    containerButtonTodo: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
    },
    sectionButtonTodo: {
    },
    sectionViewTitle: {
        marginBottom: 5,
        left: 20,
        top: 10
    },
    sectionTitle: {
        color: '#9B9898',
        fontSize: 16,
        fontWeight: '800',
    },
});
 
export default HomeScreen;