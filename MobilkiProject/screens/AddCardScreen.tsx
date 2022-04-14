import { ICard } from "../interfaces/ICard"

import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function AddCardScreen({ route, navigation }: any) {
  const [ru, setRu] = useState<string>('');
  const [eng, setEng] = useState<string>('');

  const addCard = async (): Promise<void> => {
    if (
      ru.trim() !== '' && eng.trim() !== '' 
    ) {
      try {
        await addDoc(collection(db, 'cards'), {
          eng: eng.trim(),
          ru: ru.trim(),
        } as ICard);
        setRu('');
        setEng('');
        navigation.navigate('Cards');
      } catch (e) {
      }
    }
  };

  return (
    <View>
      <Text>Добавить карточку</Text>
      <TextInput
              placeholder="Английский"
              value={eng}
              onChangeText={(value) => setEng(value)}
              style={styles.textbox}
            />
      <TextInput
              placeholder="Русский"
              value={ru}
              onChangeText={(value) => setRu(value)}
              style={styles.textbox}
            />
      <View style={styles.addButton}>
        <Button title="Добавить" color="#4082f5" onPress={addCard} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textbox: {
    borderWidth: 1,
    borderColor: '#4082f5',
    borderRadius: 8,
    margin: 2,
    width: '100%',
  },
  addButton: {
    margin: 'auto',
  },
})
