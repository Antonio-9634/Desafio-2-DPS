import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
  const { platillo } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: platillo.imagen }} style={styles.image} />
      <Text style={styles.title}>{platillo.nombre}</Text>
      <Text style={styles.text}>{platillo.descripcion}</Text>
      <Text style={styles.subTitle}>Ingredientes:</Text>
      {platillo.ingredientes.map((ing, idx) => (
        <Text key={idx} style={styles.text}>- {ing}</Text>
      ))}
      <Text style={styles.text}>Región: {platillo.region}</Text>
      <Text style={styles.text}>Precio: ${platillo.precio.toFixed(2)}</Text>
      <Text style={styles.text}>Categoría: {platillo.categoria}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  text: {
    fontSize: 16,
    marginVertical: 2
  }
});

export default DetailScreen;
