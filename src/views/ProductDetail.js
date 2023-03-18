import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, Image, StyleSheet  } from 'react-native'
import Meses from '../utilities/Meses';

const ProductDetail = ({ route }) => {
    
    const productObj = route.params.productObj;
    const { createdAt, product, points, image, is_redemption, id } = productObj;

    // Hook para redireccionar
    const navigation = useNavigation();

    // formatear el dia mes y año apartir de createdAt
    const meses = Meses;
    const date = new Date(createdAt);
    const mes_name = date.getMonth();
    const anio = date.getFullYear();
    const dia = date.getDay();
    const mes = meses[mes_name];

    return ( 
        <>
            <View style={[styles.container, { flexDirection: 'column'}]}>
                <View style={{flex: 2, backgroundColor: '#CFD6FF'}}>
                    <View style={[styles.container, { flexDirection: 'column'}]}>
                        <View style={{flex: 2}}></View>
                        <View style={{flex: 1}}>
                            <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                <Text style={styles.title}>{ product }</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex: 4, alignItems: 'center', paddingBottom: 10, paddingTop:10}} >
                    <Image
                        source={{uri: image}}
                        style={{width: '80%', height: '100%', borderRadius:10, marginTop: 10, marginBottom:10}}
                    />
                </View>
                <View style={{flex: 3, backgroundColor: 'white', padding:20}}>
                    <View style={[styles.container, { flexDirection: 'column'}]}>
                        <View style={{flex: 1}}>
                            <Text style={{ fontSize:14, fontWeight: 800, color: '#9B9898' }}>Detalles del producto:</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{ fontSize:16, fontWeight: 800, color: '#000000' }}>Comprado el { dia } de { mes }, { anio } </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{ fontSize:14, fontWeight: 800, color: '#9B9898' }}>Con esta compra acumulaste:</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{ fontSize:24, fontWeight: 800, color: '#000000' }}>{points} puntos</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <View style={{marginLeft: 20, marginRight: 20}}>
                        <Button
                            title="Aceptar"
                            onPress={()=>navigation.navigate("HomeScreen")}
                            color="#334FFA"
                            accessibilityLabel="Aceptar"
                        />
                    </View>
                </View>
            </View>
        </>
     );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 800
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        borderRadius: 40

    },
    container: {
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0
    },
    card: {
        height: '100%',
        width: '100%',
        backgroundColor: '#334FFA',
        justifyContent: 'center', // sCentered vertically
    },
  });
 
export default ProductDetail;