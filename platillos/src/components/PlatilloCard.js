import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

const PlatilloCard = ({ platillo, onPress }) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={[styles.container, isLandscape && styles.containerHorizontal]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.card,
          isLandscape ? { width: '80%' } : { width: '94%' }
        ]}
      >
        <Image source={{ uri: platillo.imagen }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{platillo.nombre}</Text>
          <Text style={styles.description}>{platillo.descripcion}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  containerHorizontal: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    marginTop: 5,
    color: '#555',
  },
});

export default PlatilloCard;
