import React from 'react';
import { ScrollView } from 'react-native';
import platillos from '../data/platillos.json';
import PlatilloCard from '../components/PlatilloCard';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      {platillos.map((platillo) => (
        <PlatilloCard
          key={platillo.id}
          platillo={platillo}
          onPress={() => navigation.navigate('Detalles', { platillo })}
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
