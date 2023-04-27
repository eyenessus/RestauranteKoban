import MapView from 'react-native-maps';
import {enableLatestRenderer} from 'react-native-maps';
enableLatestRenderer();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Text,
  View,
  Image,
  ImageBackground,
  Alert,
  Modal,
  Pressable,
  Platform,
  PermissionsAndroid,
  Dimensions,
} from 'react-native';
import { useEffect } from 'react';
import OneSignal from 'react-native-onesignal';
import { NativeBaseProvider, Box,Button, VStack, Stack, Heading, Center, Divider  } from "native-base";
const image = {
  uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/1987871-abstrato-preto-listras-diagonal-fundo-gratis-vetor.jpg',
};

function HomeScreen() {
  
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <NativeBaseProvider>
     <Box backgroundColor="#000000">
    
 <ScrollView>
 <Text style={styles.titulo}>Koban</Text>
      <VStack space="10" mt="20" px="10">
        <Heading size="md">row</Heading>
        <Stack direction="row" mb="2.5" mt="1.5" space={75}>
          <Center size="16" bg="primary.400" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
           <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require('./src/imagem/s10.jpg')}
              style={styles.produto}
            />
          </Pressable>
          </Center>
          <Center bg="primary.500" size="16" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
             <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require('./src/imagem/s15.jpg')}
              style={styles.produto}
            />
          </Pressable>
          </Center>
          <Center size="16" bg="primary.700" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
                 <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require('./src/imagem/s16.jpg')}
              style={styles.produto}
            />
          </Pressable>
          </Center>
        </Stack>

        <Divider />
       <Stack direction="row" mb="2.5" mt="33" space={75}>
          <Center size="16" bg="primary.400" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
              <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require('./src/imagem/s1.jpg')}
              style={styles.produto}
            />
          </Pressable>
          </Center>
          <Center bg="primary.500" size="16" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
               <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require('./src/imagem/s5.jpg')}
              style={styles.produto}
            />
          </Pressable>
          </Center>
          <Center size="16" bg="primary.700" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
                   <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require('./src/imagem/s3.jpg')}
              style={styles.produto}
            />
          </Pressable>
          </Center>
        </Stack>
        
        <Divider />
 <Divider>
 <Stack direction="row" mb="2.5" mt="1.5" space={75}>
          <Center size="16" bg="primary.400" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
               <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require('./src/imagem/s9.jpg')}
              style={styles.produto}
            />
          </Pressable>
          </Center>
          <Center bg="primary.500" size="16" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
                <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require('./src/imagem/s11.jpg')}
              style={styles.produto}
            />
          </Pressable>
          </Center>
          <Center size="16" bg="primary.700" rounded="sm" _text={{
          color: "warmGray.50",
          fontWeight: "medium"
        }} shadow={"3"}>
                    <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require('./src/imagem/s12.jpg')}
              style={styles.produto}
            />
          </Pressable>
          </Center>
        </Stack>
        
 </Divider>

      </VStack>
    </ScrollView>;  
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Esta típica comida japonesa é um bolinho de arroz enrolado com
                  uma alga. O sushi traz diferentes ingredientes em seu
                  interior, entre eles frutos do mar, peixe e vegetais. Como a
                  variedade de sushi é bem grande, a iguaria pode ganhar outros
                  nomes dependendo do recheio escolhido. A título de
                  curiosidade, a palavra sushi significa “é azedo”.
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Fechar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
      
   
     </Box>
  
  </NativeBaseProvider>
   
  );
}

function Pagamento() {
  return (
    <NativeBaseProvider >
    <Box backgroundColor="#000000">
    <View >
      <Heading color="white">
    Tipos de {" "}
        <Heading color="emerald.400">Pagamento</Heading>
      </Heading>
  
      <Text style={styles.pag}>CREDITO</Text>
          <Text style={styles.pag}>DEBITO</Text>
          <Text style={styles.pag}>PIX</Text>
          <Text style={styles.pag}>MASTERCARD</Text>
          <Text style={styles.pag}>VISA</Text>
          <Text style={styles.pag}>PIX</Text>
    </View>;
     
  </Box>
  </NativeBaseProvider>
    
  );
}
const {width, height} = Dimensions.get('screen');

function Local() {
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Localização
      </Text>

      <MapView
        style={{width, height}}
        initialRegion={{
          latitude: -23.5760444,
          longitude: -46.8479999,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
        
      />

    
    
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
 
  OneSignal.setAppId("c668d507-4786-4944-97e5-250613b856d9");
  OneSignal.setNotificationOpenedHandler(notification => {
  const message = notification?.notification?.body ?? 'Message not found';
  const title = notification?.notification?.title ?? 'Title not found';
  Alert.alert(title, message);
  });



  



  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Pagamento"
          component={Pagamento}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="contactless-payment"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Local"
          component={Local}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="source-commit-local"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 6,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: 'white',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    marginTop: 10,
    padding: 7,
  },
  titulo: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
  produto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 15,
    backgroundColor: 'white',
  },
  pag: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
