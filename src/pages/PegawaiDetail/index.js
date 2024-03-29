import { FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { MyButton, MyGap, MyInput, MyPicker } from '../../components'
import axios from 'axios';
import { apiURL, webURL } from '../../utils/localStorage'
import { showMessage } from 'react-native-flash-message'
import RenderHtml from 'react-native-render-html';
import moment from 'moment'
export default function PegawaiDetail({ navigation, route }) {

    const item = route.params;

    const MyList = ({ label, value }) => {
        return (
            <View
                style={{
                    marginVertical: 2,
                    paddingTop: 2,
                    paddingHorizontal: 10,
                    backgroundColor: colors.white,
                    borderRadius: 5,
                }}>
                <Text
                    style={{
                        fontFamily: fonts.primary[600],
                        color: colors.black,
                    }}>
                    {label}
                </Text>
                <Text
                    style={{
                        fontFamily: fonts.primary[400],
                        color: colors.black,
                    }}>
                    {value}
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            // padding: 10,
        }}>

            <ScrollView showsVerticalScrollIndicator={false} style={{
            }}>

                <View style={{
                    flexDirection: 'row',
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.primary,
                    marginBottom: 10,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>


                    <Text style={{
                        flex: 1,
                        fontFamily: fonts.secondary[600],
                        fontSize: MyDimensi / 3,
                        color: colors.black,
                        textAlign: 'center'
                    }}>Perjalanan Dinas {item.dinas} Daerah</Text>
                </View>

                <View style={{
                    padding: 10
                }}>
                    <MyList label="Nama" value={item.nama} />
                    <MyList label="NIP" value={item.nip} />
                    <MyList label="Jabatan" value={item.jabatan} />
                    <MyList label="OPD" value={item.opd} />
                    <MyList label="Nomor ST" value={item.nomor_st} />
                    <MyList label="Tanggal Berangkat" value={item.tanggal_berangkat} />
                    <MyList label="Tanggal Kembali" value={item.tanggal_kembali} />
                    <MyList label="Selama" value={item.selama} />
                    <MyList label="Di Setujui" value={item.disetujui} />
                    <MyList label="Tujuan" value={item.tujuan} />
                    <MyList label="Uraian" value={item.uraian} />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})