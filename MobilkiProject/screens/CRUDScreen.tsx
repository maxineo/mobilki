import React from 'react';

import {
  StyleSheet,
  View,
  Button,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { db } from '../firebase';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

import CardItem from '../components/CardItem';

import { ICard } from '../interfaces/ICard';

export default function CRUDScreen({ navigation }: any) {
  const [cards, setCards] = React.useState<ICard[]>([]);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'cards'), (snapshot: any) => {
      setCards(
        snapshot.docs.map(
          (item: QueryDocumentSnapshot) =>
            ({
              ...item.data(),
              pk: item.id,
            } as ICard)
        )
      );
    });
    return unsubscribe;
  }, []);

  const deleteCard = async (id: string): Promise<void> => {
    await deleteDoc(doc(db, 'cards', id));
  };

  const randomCard = () => {
    navigation.navigate('EngCard', {card: cards[Math.floor(Math.random() * cards.length)]})
  }

  const addCardNavigate = () => {
    navigation.navigate('AddCard');
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button title="Случайная" onPress={randomCard}></Button>
        <Ionicons name="add-circle" size={40} onPress={addCardNavigate}/>
      </View>
      <View style={styles.cards}>
        <ScrollView>
          {cards.map(card => <CardItem card={card} deleteCard={() => deleteCard(card.pk)}/>)}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cards: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 5,
    marginTop: 5,
  }
});
