import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECTID,
  storageBucket:process.env.EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINSENDERID,
  appId: process.env.EXPO_PUBLIC_APPID
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
    <View 
      style={{
      width:"100%", 
      height:"100%",
      backgroundColor: "#fce2e2ff",
      justifyContent:'center',
      alignItems:'center'}}>
        <View
      style={{
      width:"100%", 
      height:'20%',
      backgroundColor: "#de4242ff",
      justifyContent:'center',
      alignItems:'center',
      }}
      >
        <Text style={{fontSize:"25px"}}>Lista de Nomes:</Text>
      </View>
      
      <FlatList 
      data={nomes}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View
        style={{
      width:"100%", 
      height:'auto',
      padding:"1rem",
      margin:'1rem',
      backgroundColor: "#de4242ff",
      justifyContent:'center',
      alignItems:'center',

      text:hover{ background-color:"#dcde42ff"},
      }}>
          <Text  style={{fontSize:"20px"}}>{item.Nome} {item.Sobrenome}</Text>
        </View>
      )}
      />
    </View>
  );
}