import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking, ImageBackground } from 'react-native';
import { fonts, windowWidth, colors, windowHeight, MyDimensi } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';

export default function Login({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    username: null,
    password: null
  });
  const [loading, setLoading] = useState(false);

  const [comp, setComp] = useState({});

  const card = new Animated.Value(-30);
  const img = new Animated.Value(-20);




  const masuk = () => {


    if (kirim.username == null && kirim.password == null) {
      Alert.alert(MYAPP, 'username dan Password tidak boleh kosong !');
    } else if (kirim.username == null) {
      Alert.alert(MYAPP, 'username tidak boleh kosong !');
    } else if (kirim.password == null) {
      Alert.alert(MYAPP, 'Password tidak boleh kosong !');
    } else {


      setLoading(true);
      console.log(kirim);

      axios
        .post(apiURL + 'login', kirim)
        .then(res => {
          setLoading(false);
          console.log(res.data);
          if (res.data.status == 404) {
            showMessage({
              type: 'danger',
              message: res.data.message
            })
          } else {
            storeData('user', res.data.data);
            navigation.replace('MainApp')
          }
        });



    }




  }

  useEffect(() => {
    Animated.timing(card, {
      toValue: 1,
      duration: 850,
      useNativeDriver: false,
    }).start();
    Animated.timing(img, {
      toValue: 0,
      duration: 850,
      useNativeDriver: false,
    }).start();
    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })

  }, []);

  return (


    <ScrollView style={{ flex: 1, position: "relative" }}>
      <ImageBackground source={require('../../assets/bgsplash.png')} style={{ flex: 1, width: '100%', height: "100%" }}>

        <ScrollView style={{ flex: 1, position: 'relative' }}>
          <View style={{}}>
            <Image source={require('../../assets/motif.png')} style={{
              width: '100%',
              height: 33
            }} />
          </View>
          <Animated.View style={{
            padding: 20,
            flex: 1, margin: 10,
            bottom: card,
            borderRadius: 0,

          }}>

            <Image source={require('../../assets/logo.png')} style={{
              height: 214, width: 149,
              alignItems: 'center',
              alignSelf: "center",
              marginBottom: '20%'
            }} />

            <Text style={{
              textAlign: 'center',
              fontFamily: fonts.primary[600],
              fontSize: MyDimensi / 2.5,
              marginTop: -25,
            }}>
              LOGIN
            </Text>


            {/* USERNAME INPUT */}


            <MyGap jarak={50} />

            <MyInput label="Username" onChangeText={x => {
              setKirim({
                ...kirim,
                username: x
              })
            }} iconname="person" placeholder="Masukan Username" />


            <MyGap jarak={20} />
            {/* PASSWORD INPUT */}


            <MyInput label="Password" onChangeText={x => {
              setKirim({
                ...kirim,
                password: x
              })
            }} iconname="lock-closed" placeholder="Masukan password" secureTextEntry={true} />


            {/* BUTTON LOGIN */}
            <TouchableOpacity onPress={() => {
              let urlWA = 'https://wa.me/' + comp.tlp + `?text=Hallo admin saya lupa password . . .`;
              Linking.openURL(urlWA)
            }} style={{
              marginTop: 0,
            }}>
              <Text style={{
                textAlign: 'right',
                fontFamily: fonts.secondary[600],
                color: colors.black,
                fontSize: MyDimensi / 4,
                marginTop: 10,

              }}>Lupa password ?</Text>
            </TouchableOpacity>

            <MyGap jarak={40} />
            <MyGap jarak={0} />
            {!loading &&





              <MyButton
                onPress={masuk}
                title="Login"


                Icons="log-in-outline"
              />


            }


            {loading && <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <ActivityIndicator color={colors.secondary} size="large" />
            </View>}

            <Text style={{ fontFamily: fonts.primary[600], textAlign: "center", marginTop: 20 }}>Pemerintahan Kab. Pare-pare</Text>

          </Animated.View>
          <View style={{ marginTop: '5%' }}>

          </View>
        </ScrollView>


      </ImageBackground>








    </ScrollView>




  );
}

const styles = StyleSheet.create({});
