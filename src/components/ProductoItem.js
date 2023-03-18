import React from 'react';
import { Text, View, Image, StyleSheet  } from 'react-native'

const ProductoItem = ({createdAt, product, points, image, is_redemption, id}) => {
    return ( 
        <>
            <View style={styles.item}>
                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignSelf: 'stretch' }}>
                        <Image
                        source={{uri: image}}
                        style={{width: 48, height: 48}}
                        />
                    </View>
                    <View style={{ flex: 3, alignSelf: 'stretch' }}>
                        <Text style={styles.product}>{ product }</Text>
                        <Text style={styles.createdAt}>{ createdAt }</Text>
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
  });
 
export default ProductoItem;