import React, { useState } from 'react';
import Puntos from '../components/Puntos';
import Movimientos from '../components/Movimientos';
import Header from '../components/Header';
import FiltroMovimientos from '../components/FiltroMovimientos';
import { StyleSheet, View, Text } from 'react-native';

const HomeScreen = () => {
    const [ nombre, guardarNombre ] = useState('Ruben Rodriguez!');

    return ( 
        <>
            <View style={[styles.container, { flexDirection: 'column', backgroundColor: '#F8F8F8'}]}>
                <View style={{flex: 1}}>
                    <View style={[styles.container, { flexDirection: 'column'}]}>
                        <View style={{flex: 1}}></View>
                        <View style={{flex: 1}}>
                            <View style={{ flex: 1, alignSelf: 'stretch', marginLeft: 10 }}>
                                <Header nombre={ nombre }/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex: 2, alignItems: 'center', paddingBottom: 0, paddingTop:0}} >
                    <View style={{ alignSelf: 'stretch', flexDirection: 'row' }}>
                        <View style={{ flex: 2, alignSelf: 'stretch' }}>
                            <View style={styles.sectionViewTitle}>
                                <Text style={styles.sectionTitle}>TUS PUNTOS</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, alignSelf: 'stretch' }}></View>
                    </View>
                    <View style={styles.containerPoints}>
                        <Puntos />
                    </View>
                </View>
                <View style={{flex: 3}}>
                    <View style={{ alignSelf: 'stretch', flexDirection: 'row' }}>
                        <View style={{ flex: 2, alignSelf: 'stretch' }}>
                            <View style={styles.sectionViewTitle}>
                                <Text style={styles.sectionTitle}>TUS MOVIMIENTOS</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, alignSelf: 'stretch' }}></View>
                    </View>
                    <View style={styles.containerMovements}>
                        <Movimientos />   
                    </View> 
                </View>
                <View style={{flex: 1}}>
                    <View style={[styles.container, { flexDirection: 'column'}]}>
                        <View style={{flex: 1}}></View>
                        <View style={{flex: 1}}>
                            <View style={{ flex: 1, alignSelf: 'stretch', marginLeft: 20, marginRight: 20 }}>
                                <FiltroMovimientos />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0
    },
    containerHeader: {
        marginTop:28,
        marginBottom: 10,
    },
    containerPoints: {
        width: '100%',
        height: '90%',
        marginTop: 10,
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
    sectionViewTitle: {
        paddingLeft: 15,
        paddingRight: 15
    },
    sectionTitle: {
        color: '#9B9898',
        fontSize: 16,
        fontWeight: '800',
        marginTop: 8
    }
});
 
export default HomeScreen;