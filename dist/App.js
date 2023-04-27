"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_maps_1 = __importDefault(require("react-native-maps"));
const react_native_maps_2 = require("react-native-maps");
react_native_maps_2.enableLatestRenderer();
const React = __importStar(require("react"));
const native_1 = require("@react-navigation/native");
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const MaterialCommunityIcons_1 = __importDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
const react_native_1 = require("react-native");
const react_native_2 = require("react-native");
const react_native_onesignal_1 = __importDefault(require("react-native-onesignal"));
const native_base_1 = require("native-base");
const image = {
    uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/1987871-abstrato-preto-listras-diagonal-fundo-gratis-vetor.jpg',
};
function HomeScreen() {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (<native_base_1.NativeBaseProvider>
     <native_base_1.Box backgroundColor="#000000">
    
 <react_native_1.ScrollView>
 <react_native_2.Text style={styles.titulo}>Koban</react_native_2.Text>
      <native_base_1.VStack space="10" mt="20" px="10">
        <native_base_1.Heading size="md">row</native_base_1.Heading>
        <native_base_1.Stack direction="row" mb="2.5" mt="1.5" space={75}>
          <native_base_1.Center size="16" bg="primary.400" rounded="sm" _text={{
        color: "warmGray.50",
        fontWeight: "medium"
    }} shadow={"3"}>
           <react_native_2.Pressable onPress={() => setModalVisible(true)}>
            <react_native_2.Image source={require('./src/imagem/s10.jpg')} style={styles.produto}/>
          </react_native_2.Pressable>
          </native_base_1.Center>
          <native_base_1.Center bg="primary.500" size="16" rounded="sm" _text={{
        color: "warmGray.50",
        fontWeight: "medium"
    }} shadow={"3"}>
             <react_native_2.Pressable onPress={() => setModalVisible(true)}>
            <react_native_2.Image source={require('./src/imagem/s15.jpg')} style={styles.produto}/>
          </react_native_2.Pressable>
          </native_base_1.Center>
          <native_base_1.Center size="16" bg="primary.700" rounded="sm" _text={{
        color: "warmGray.50",
        fontWeight: "medium"
    }} shadow={"3"}>
                 <react_native_2.Pressable onPress={() => setModalVisible(true)}>
            <react_native_2.Image source={require('./src/imagem/s16.jpg')} style={styles.produto}/>
          </react_native_2.Pressable>
          </native_base_1.Center>
        </native_base_1.Stack>

        <native_base_1.Divider />
       <native_base_1.Stack direction="row" mb="2.5" mt="33" space={75}>
          <native_base_1.Center size="16" bg="primary.400" rounded="sm" _text={{
        color: "warmGray.50",
        fontWeight: "medium"
    }} shadow={"3"}>
              <react_native_2.Pressable onPress={() => setModalVisible(true)}>
            <react_native_2.Image source={require('./src/imagem/s1.jpg')} style={styles.produto}/>
          </react_native_2.Pressable>
          </native_base_1.Center>
          <native_base_1.Center bg="primary.500" size="16" rounded="sm" _text={{
        color: "warmGray.50",
        fontWeight: "medium"
    }} shadow={"3"}>
               <react_native_2.Pressable onPress={() => setModalVisible(true)}>
            <react_native_2.Image source={require('./src/imagem/s5.jpg')} style={styles.produto}/>
          </react_native_2.Pressable>
          </native_base_1.Center>
          <native_base_1.Center size="16" bg="primary.700" rounded="sm" _text={{
        color: "warmGray.50",
        fontWeight: "medium"
    }} shadow={"3"}>
                   <react_native_2.Pressable onPress={() => setModalVisible(true)}>
            <react_native_2.Image source={require('./src/imagem/s3.jpg')} style={styles.produto}/>
          </react_native_2.Pressable>
          </native_base_1.Center>
        </native_base_1.Stack>
        
        <native_base_1.Divider />
 <native_base_1.Divider>
 <native_base_1.Stack direction="row" mb="2.5" mt="1.5" space={75}>
          <native_base_1.Center size="16" bg="primary.400" rounded="sm" _text={{
        color: "warmGray.50",
        fontWeight: "medium"
    }} shadow={"3"}>
               <react_native_2.Pressable onPress={() => setModalVisible(true)}>
            <react_native_2.Image source={require('./src/imagem/s9.jpg')} style={styles.produto}/>
          </react_native_2.Pressable>
          </native_base_1.Center>
          <native_base_1.Center bg="primary.500" size="16" rounded="sm" _text={{
        color: "warmGray.50",
        fontWeight: "medium"
    }} shadow={"3"}>
                <react_native_2.Pressable onPress={() => setModalVisible(true)}>
            <react_native_2.Image source={require('./src/imagem/s11.jpg')} style={styles.produto}/>
          </react_native_2.Pressable>
          </native_base_1.Center>
          <native_base_1.Center size="16" bg="primary.700" rounded="sm" _text={{
        color: "warmGray.50",
        fontWeight: "medium"
    }} shadow={"3"}>
                    <react_native_2.Pressable onPress={() => setModalVisible(true)}>
            <react_native_2.Image source={require('./src/imagem/s12.jpg')} style={styles.produto}/>
          </react_native_2.Pressable>
          </native_base_1.Center>
        </native_base_1.Stack>
        
 </native_base_1.Divider>

      </native_base_1.VStack>
    </react_native_1.ScrollView>;  
          <react_native_2.Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
        react_native_2.Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
    }}>
            <react_native_2.View style={styles.centeredView}>
              <react_native_2.View style={styles.modalView}>
                <react_native_2.Text style={styles.modalText}>
                  Esta típica comida japonesa é um bolinho de arroz enrolado com
                  uma alga. O sushi traz diferentes ingredientes em seu
                  interior, entre eles frutos do mar, peixe e vegetais. Como a
                  variedade de sushi é bem grande, a iguaria pode ganhar outros
                  nomes dependendo do recheio escolhido. A título de
                  curiosidade, a palavra sushi significa “é azedo”.
                </react_native_2.Text>
                <react_native_2.Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                  <react_native_2.Text style={styles.textStyle}>Fechar</react_native_2.Text>
                </react_native_2.Pressable>
              </react_native_2.View>
            </react_native_2.View>
          </react_native_2.Modal>
      
   
     </native_base_1.Box>
  
  </native_base_1.NativeBaseProvider>);
}
function Pagamento() {
    return (<native_base_1.NativeBaseProvider>
    <native_base_1.Box backgroundColor="#000000">
    <react_native_2.View>
      <native_base_1.Heading color="white">
    Tipos de {" "}
        <native_base_1.Heading color="emerald.400">Pagamento</native_base_1.Heading>
      </native_base_1.Heading>
  
      <react_native_2.Text style={styles.pag}>CREDITO</react_native_2.Text>
          <react_native_2.Text style={styles.pag}>DEBITO</react_native_2.Text>
          <react_native_2.Text style={styles.pag}>PIX</react_native_2.Text>
          <react_native_2.Text style={styles.pag}>MASTERCARD</react_native_2.Text>
          <react_native_2.Text style={styles.pag}>VISA</react_native_2.Text>
          <react_native_2.Text style={styles.pag}>PIX</react_native_2.Text>
    </react_native_2.View>;
     
  </native_base_1.Box>
  </native_base_1.NativeBaseProvider>);
}
const { width, height } = react_native_2.Dimensions.get('screen');
function Local() {
    return (<react_native_2.View>
      <react_native_2.Text style={{
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    }}>
        Localização
      </react_native_2.Text>

      <react_native_maps_1.default style={{ width, height }} initialRegion={{
        latitude: -23.5760444,
        longitude: -46.8479999,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    }}/>

    
    
    </react_native_2.View>);
}
const Tab = bottom_tabs_1.createBottomTabNavigator();
function App() {
    react_native_onesignal_1.default.setAppId("c668d507-4786-4944-97e5-250613b856d9");
    react_native_onesignal_1.default.setNotificationOpenedHandler(notification => {
        const message = notification?.notification?.body ?? 'Message not found';
        const title = notification?.notification?.title ?? 'Title not found';
        react_native_2.Alert.alert(title, message);
    });
    return (<native_1.NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons_1.default name="home" color={color} size={size}/>),
    }}/>

        <Tab.Screen name="Pagamento" component={Pagamento} options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons_1.default name="contactless-payment" color={color} size={size}/>),
    }}/>

        <Tab.Screen name="Local" component={Local} options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons_1.default name="source-commit-local" color={color} size={size}/>),
    }}/>
      </Tab.Navigator>
    </native_1.NavigationContainer>);
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
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