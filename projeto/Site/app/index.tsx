import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Zocial from '@expo/vector-icons/Zocial';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const imageMenu = require('../assets/images/LSC_LOGO_2.png') 
  const imageBgInicio = require('../assets/images/LSC_01.jpg')

  return (
    <View style={styles.container}>    
      {/* Menu */}
      <View
        style={{
         display: "flex",
         alignItems: 'center',
         justifyContent:"space-around",
         flexDirection:'row',
         width:'100%',
         height:'15%',
         backgroundColor: "#202a33"
        }}
      >
          <Image source={imageMenu} style={styles.image} />
          <View style={styles.menuIcones}>
          <Zocial name="cart" size={24} color="#fff" style={{padding:'2rem'}}/>
          <SimpleLineIcons name="menu" size={24} color="#fff" />
          </View>
      </View>

      <View  
        style={{
         width:'100%',
         display: "flex",
         alignItems: 'center',
        }}
         >
        <ImageBackground source={imageBgInicio} style={styles.bg} imageStyle={{opacity: 0.2}}>
          <Text style={{ color:'#fff', fontSize:"20px", marginTop:'70px'}}>Cafeteria premium de inspiração londrina</Text>
          <Text style={{ color:'#fff', fontSize:"29px", marginTop:'20px'}}>The Breakfast, Brunch and Drink Lab.</Text>
          <Button title={'Enviar Mensagem'}>
          </Button>
          <Text style={{ color:'#856f38', fontSize:"34px", marginTop:'40px'}}>London Coffee Station</Text>
       </ImageBackground>
      </View>
    </View>
  );
}



  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#0e0b05"
    },
    menuIcones:{
          display: "flex",
          padding:'3%',
          flexDirection:"row",
          alignItems: 'center',
    },
    image:{
        width: 150 ,
        height: "30%",
        marginLeft: 20,
    }, 
    bg:{
        width: "100%",
        height: 500,
    },       
  });
