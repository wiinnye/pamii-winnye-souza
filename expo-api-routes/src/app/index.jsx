import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINSENDERID,
  appId: process.env.EXPO_PUBLIC_APPID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


import { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';


export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);


  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#EEF0F2"
      }}>
      <View
        style={{
          width: "100%",
          height: '10%',
          backgroundColor: "#007090",
        }}
      >
        <Image
          style={{ width: '100px', height: "95px", alignSelf: "flex-start", padding: "10px" }}
          source={{ uri: 'https://th.bing.com/th/id/R.1422944bd0e2453d6a2588f7ee305e6c?rik=DCQBmrX16yn13A&riu=http%3a%2f%2fblogs.powercode.id%2fwp-content%2fuploads%2f2022%2f09%2ffirebase3.png&ehk=WNZyhzq%2bgco2pRc50QvTZSxVcXufW2%2f29KPZ5Z6S26A%3d&risl=&pid=ImgRaw&r=0://cdn-icons-png.flaticon.com/512/53/53453.png' }}
        />
      </View>
      <Text style={{
        fontSize: "30px",
        marginTop: "2rem",
        marginBottom: "2rem",
        marginLeft: ".9rem",
        fontWeight: "500",

      }}>Lista de Nomes:</Text>

      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              width: "100%",
              padding: ".3rem",
              marginBottom: '1rem',
              justifyContent: 'center',
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: '50%',
                height: "100%",
                backgroundColor:"#629677",
                padding: '.6rem'
              }}
            >
              <Image
                style={{ width: '40px', height: "40px", alignSelf: 'center' }}
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/53/53453.png' }}
              />
              <Text style={{ fontSize: "20px", color: '#000', paddingLeft: ".5rem", alignSelf: 'center' }}>{item.Nome} {item.Sobrenome}</Text>
            </div>
          </View>
        )}

      />
    </View>
  );
}