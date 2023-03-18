import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import Meses from '../utilities/Meses';

const ProductoItem = ({createdAt, product, points, image, is_redemption, id}) => {
    // Hook para redireccionar
    const navigation = useNavigation();
    const productObj = { createdAt, product, points, image, is_redemption, id };

    // formatear el dia mes y año apartir de createdAt
    const meses = Meses;
    const date = new Date(createdAt);
    const mes_name = date.getMonth();
    const anio = date.getFullYear();
    const dia = date.getDay();
    const mes = meses[mes_name];

    return ( 
        <>
            <TouchableOpacity onPress={()=>navigation.navigate("ProductDetail", 
                { productObj: productObj }
            )}>
                <View style={styles.item}>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignSelf: 'stretch' }}>
                            <Image
                            source={{uri: image}}
                            style={{width: 50, height: 50}}
                            />
                        </View>
                        <View style={{ flex: 3, alignSelf: 'stretch' }}>
                            <Text style={styles.product}>{ product }</Text>
                            <Text style={styles.createdAt}>{ dia } de { mes }, { anio }</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'stretch' }}></View>
                        <View style={{ flex: 1, alignSelf: 'stretch' }}>
                            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                { is_redemption && (
                                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight:'800', color: '#FF0000'}}>-</Text> 
                                )}
                                { !is_redemption && (
                                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight:'800', color: '#00B833'}}>+</Text> 
                                )}
                            </View>
                            <View style={{ flex: 3, alignSelf: 'stretch' }}>
                                <Text style={{ textAlign: 'center'}}>{ points }</Text>
                            </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    product: {
      fontSize: 14,
      fontWeight: '800',
      lineHeight: 19
    },
    createdAt: {
      fontSize: 12
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
  });
 
export default ProductoItem;