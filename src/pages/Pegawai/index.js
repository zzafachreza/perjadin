import { ActivityIndicator, Alert, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { Icon } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios';
import { MYAPP, apiURL, getData } from '../../utils/localStorage';
import moment from 'moment';
import { MyHeader, MyInput } from '../../components';
export default function Pegawai({ navigation, route }) {
    const item = route.params;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const getDataTransaksi = () => {
        setLoading(true);

        getData('local').then(res => {
            if (!res) {
                Alert.alert(MYAPP, 'Silahkan atur IP localhost di menu profile')
            } else {
                axios.post(`http://${res}/perjadin_api?dinas=` + route.params.dinas).then(res => {
                    console.log(res.data);
                    setData(res.data);
                    setTMP(res.data)
                }).finally(() => {
                    setLoading(false)
                })
            }
        })



    }

    useEffect(() => {
        getDataTransaksi();
    }, []);

    const __renderItem = ({ item }) => {
        return (



            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate('PegawaiDetail', item)
            }}>
                <View style={{
                    backgroundColor: colors.white,
                    marginVertical: 5,
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 10,
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            color: colors.black,
                            fontSize: MyDimensi / 3.5
                        }}>{item.nama_lengkap}</Text>
                        <Text style={{
                            fontFamily: fonts.secondary[800],
                            color: colors.black,
                            fontSize: MyDimensi / 4
                        }}>{item.nip_pegawai}</Text>
                    </View>

                    <View>
                        <Icon type='ionicon' name='chevron-forward-circle' color={colors.primary} />
                    </View>

                </View>
            </TouchableWithoutFeedback>




        )
    }

    const [key, setKey] = useState('');
    const [TMP, setTMP] = useState({});
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background
        }}>

            <MyHeader judul={'Perjalanan Dinas ' + item.dinas + ' Daerah'} onPress={() => navigation.goBack()} />



            {!loading &&
                <View style={{
                    flex: 1,
                    paddingHorizontal: 20,

                }}>
                    <View style={{
                        position: 'relative',
                        backgroundColor: colors.white,
                        height: 45,
                        borderRadius: 20,
                        marginBottom: 10,

                    }}>
                        {key.length > 0 &&

                            <TouchableWithoutFeedback onPress={() => {
                                setKey(''); setData(TMP);
                            }}>
                                <View style={{
                                    position: 'absolute',
                                    zIndex: 99,
                                    top: 10,
                                    right: 10,
                                }}>
                                    <Icon type='ionicon' name='close' color={colors.border} />
                                </View>
                            </TouchableWithoutFeedback>}
                        <View style={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                        }}>
                            <Icon type='ionicon' name='search' size={20} color={colors.border} />
                        </View>
                        <TextInput value={key} onChangeText={x => {
                            setKey(x);
                            if (x.length > 0) {
                                let TMPSrc = data.filter(i => i.nama.toLowerCase().indexOf(x.toLowerCase()) > -1);
                                if (TMPSrc.length > 0) {
                                    setData(TMPSrc);
                                }
                            } else {
                                setData(TMP);
                            }
                        }} placeholder='Pencarian nama. . .' style={{
                            height: 45,

                            marginBottom: 10,
                            borderRadius: 30,
                            paddingLeft: 40,
                            borderColor: colors.primary,
                            fontFamily: fonts.secondary[600],
                            fontSize: MyDimensi / 4
                        }} />
                    </View>
                    <FlatList data={data} showsVerticalScrollIndicator={false} renderItem={__renderItem} />

                </View>
            }
            {loading &&
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color={colors.primary} />

                </View>
            }



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})