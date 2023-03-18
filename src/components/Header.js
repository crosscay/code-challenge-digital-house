import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';


const Header = () => {
    return ( 
        <SafeAreaView style={styles.containerHeader}>
            <Text style={styles.titleIndex}>Bienvenido de vuelta!</Text>
            <Text>Ruben Rodriguez!</Text>
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    containerHeader: {
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 0,
    },
    titleIndex: {
        fontSize: 20
    },
    titleName: {
        fontSize: 16
    },
});
 
export default Header;