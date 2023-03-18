import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowRadius: 13.16,
    shadowOpacity: 0.71,
    elevation: 50,
    padding: 0,
    borderRadius: 15
  }
});

export default Card;