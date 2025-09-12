import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Zocial from '@expo/vector-icons/Zocial';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function Index() {
  const { width, height } = useWindowDimensions();

  const imageMenu = require('../assets/images/LSC_LOGO_2.png')
  const imageBgInicio = require('../assets/images/LSC_01.jpg')

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={[styles.container, { width: width * 1.0, height: height * 2.5 }]}>
        {/* Menu */}
        <View
          style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: "space-around",
            flexDirection: 'row',
            width: '100%',
            height: '15%',
            backgroundColor: "#202a33"
          }}
        >
          <Image source={imageMenu} style={styles.imageMenu} />
          <View style={styles.menuIcones}>
            <Zocial name="cart" size={24} color="#fff" style={styles.iconMenu} />
            <SimpleLineIcons name="menu" size={24} color="#fff" />
          </View>
        </View>
        {/*Banner */}
        <View
          style={{
            width: '100%',
            display: "flex",
            alignItems: 'center',
          }}
        >
          <ImageBackground source={imageBgInicio} style={styles.bgImage} imageStyle={{ opacity: 0.3 }}>
            <Text style={{ color: '#fff', fontSize: 17, marginTop: 70, marginLeft: 10, fontFamily: "Inter,Helvetica,Arial,Lucida,sans-serif", fontWeight: 600 }}>CAFETERIA PREMIUM DE INSPIRAÇÃO LONDRINA</Text>
            <Text style={{ color: '#fff', width: '69%', marginLeft:10 , fontSize: 40, marginTop: 20, fontFamily: "Spectral SC ,Georgia,Times New Roman,serif" }}>THE BREAKFAST, BRUNCH AND DRINK LAB.</Text>
            <Text style={styles.buttonBanner}>Enviar Mensagem <FontAwesome name="whatsapp" size={18} color="white" /></Text>
            <Text style={{ color: '#856f38', width: '69%', marginLeft: 10, fontSize: 30, marginTop: 40 , fontFamily: 'Spectral SC,Georgia,Times New Roman,serif' }}>LONDON COFFE STATION</Text>
          </ImageBackground>
        </View>
        <View style={styles.textos}>
          <Text style={{ color: '#d2d3d5',fontSize: 14.5, fontFamily: "Inter',Helvetica,Arial,Lucida,sans-serif" }}>A LONDON COFFEE STATION é uma cafeteria elegante e charmosa inspirada nos cafés e pubs londrinos. Oferecemos em nosso menu cafés especiais, bolos típicos britânicos e americanos, breakfast, brunch e as famosas torres afternoon tea para seu chá da tarde. venha nos conhecer e se sentir em londres.</Text>
          <Text style={{ color: '#d2d3d5',marginTop: 20, fontSize: 25, fontFamily: "Spectral SC,Georgia,Times New Roman,serif" }}> Experimente o tradicional Full English Breakfast.</Text>
          <Text style={{ color: '#d2d3d5',fontSize: 14.5, fontFamily: "Inter',Helvetica,Arial,Lucida,sans-serif", marginTop: 20,  }}>Conheça nossas opções de  breakfasts e brunches , cestas especiais de café da manhã, cafés especiais 100% arábica extraídos nos métodos, nossas maravilhosas pancakes e os irresistíveis cinnamon rolls com recheios de dar água na boca.</Text>
        </View>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1000,
    backgroundColor: "#0e0b05"
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  menuIcones: {
    display: "flex",
    padding: '3%',
    flexDirection: "row",
    alignItems: 'center',
  },
  imageMenu: {
    width: "60%",
    height: "48%",
  },
  bgImage: {
    width: "100%",
    height: 600,
  },
  iconMenu: {
    padding: 20,
  },
  buttonBanner: {
    width: 210,
    height: 55,
    backgroundColor: '#856f38',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 20,
    marginTop: 25,
    borderWidth: 2,
    borderColor: 'white',
    padding: 15,
    color: 'white',
    fontSize: 15,
    fontWeight: '600'
  },
  textos: {
    backgroundColor: "#0e0b05",
    marginTop: 20,
    padding: 20
  }
});
