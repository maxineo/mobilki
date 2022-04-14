import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import { ICard } from '../interfaces/ICard';

function CardItem({card, deleteCard, navigation}: any) {
  const cardItem = card as ICard;

  const navigate = () => {
    navigation.navigate('EngCard', {card: cardItem});
  }

  const editNavigate = () => {
    navigation.navigate('EditCard', {card: cardItem});
  }

  return (
    <View style={styles.listTile}>
      <IconFontAwesome name="pencil" size={28} onPress={editNavigate}/>
      <Text onPress={navigate}>
        {cardItem.eng}
      </Text>
      <IconFontAwesome name="trash" size={28} onPress={deleteCard}/>
    </View>
  );
}

const styles = StyleSheet.create({
  listTile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#666666',
  }
});

export default function(props: any) {
  const navigation = useNavigation();

  return <CardItem {...props} navigation={navigation} />;
}