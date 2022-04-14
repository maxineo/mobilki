import { ICard } from "../interfaces/ICard"

import { StyleSheet, Text, View } from 'react-native';

export default function RuCardScreen({ route, navigation }: any) {
  const card = route.params.card as ICard;

  return (
    <View style={styles.card}>
      <Text onPress={() => navigation.navigate('Cards')}>
        {card.ru}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderWidth: 0.5,
    borderColor: '#666666',
  }
});