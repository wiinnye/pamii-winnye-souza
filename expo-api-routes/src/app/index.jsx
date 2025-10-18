import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCC4EYv7ygwg7iI4pFYQtZQxcBvK4FztzI",
  authDomain: "meu-primeiro-firebase-b1af2.firebaseapp.com",
  projectId: "meu-primeiro-firebase-b1af2",
  storageBucket: "meu-primeiro-firebase-b1af2.firebasestorage.app",
  messagingSenderId: "803074805083",
  appId: "1:803074805083:web:798a417a8bd953723e1e7e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App(){
  const [nomes, setNomes] = useState([]);

  useEffect(() =>{
    const fetchData = async () =>{
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();
    
      const data = [];
      snapshot.forEach((doc) =>{
        data.push({id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Lista de Nomes:</Text>
      <FlatList 
      data={nomes}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View>
          <Text>{item.Nome} {item.Sobrenome}</Text>
        </View>
      )}
      />
    </View>
  );
}