import { View, Text, Image, TouchableNativeFeedback, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyGap, MyHeader, MyInput } from '../../components'

export default function Perjalanandinasdalam({navigation}) {
    const backPage = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:colors.primary, }}>
    {/* HADERS */}
    <MyHeader judul="Perjalanan Dinas Dalam" onPress={backPage}/>

    {/* SEARCH NAMA */}
    <View style={{padding:10}}>
    <MyInput placeholder="Cari nama"/>
    </View>
    {/* SEARCH NANTI DISINI */}
    <ScrollView>
    <View style={{padding:10}}>
        {/* NANTI DISINI ADA DATA DATA ORANG YANG DINAS PERJALANAN DINAS DALAM */}

        {/* DIBAWAH INI HANYA CONTOH SAJA */}
        <MyGap jarak={20}/>
        {/* DATA 1 */}
        <View style={{padding:10, backgroundColor:"white", borderRadius:5, flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
            <View style={{flexDirection:"row", alignItems:'center'}}>
                <Image source={require('../../assets/userprofiledummy.png')} style={{height:30, width:30}}/>
                <View style={{left:10}}>
                    <Text style={{fontFamily:fonts.primary[600]}}>Noval</Text>
                    <Text style={{fontFamily:fonts.primary[600]}}>123123123123123123123</Text>
                </View>
            </View>

            <TouchableNativeFeedback>
                <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, alignItems:'center', height:40}}>
                    <Text style={{color:'white', fontFamily:fonts.primary[600], textAlign:'center'}}>Detail</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <MyGap jarak={20}/>
             {/* DATA 2 */}
             <View style={{padding:10, backgroundColor:"white", borderRadius:5, flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
            <View style={{flexDirection:"row", alignItems:'center'}}>
                <Image source={require('../../assets/userprofiledummy.png')} style={{height:30, width:30}}/>
                <View style={{left:10}}>
                    <Text style={{fontFamily:fonts.primary[600]}}>Noval</Text>
                    <Text style={{fontFamily:fonts.primary[600]}}>123123123123123123123</Text>
                </View>
            </View>

            <TouchableNativeFeedback>
                <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, alignItems:'center', height:40}}>
                    <Text style={{color:'white', fontFamily:fonts.primary[600], textAlign:'center'}}>Detail</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <MyGap jarak={20}/>
             {/* DATA 3 */}
             <View style={{padding:10, backgroundColor:"white", borderRadius:5, flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
            <View style={{flexDirection:"row", alignItems:'center'}}>
                <Image source={require('../../assets/userprofiledummy.png')} style={{height:30, width:30}}/>
                <View style={{left:10}}>
                    <Text style={{fontFamily:fonts.primary[600]}}>Noval</Text>
                    <Text style={{fontFamily:fonts.primary[600]}}>123123123123123123123</Text>
                </View>
            </View>

            <TouchableNativeFeedback>
                <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, alignItems:'center', height:40}}>
                    <Text style={{color:'white', fontFamily:fonts.primary[600], textAlign:'center'}}>Detail</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <MyGap jarak={20}/>
             {/* DATA 4 */}
             <View style={{padding:10, backgroundColor:"white", borderRadius:5, flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
            <View style={{flexDirection:"row", alignItems:'center'}}>
                <Image source={require('../../assets/userprofiledummy.png')} style={{height:30, width:30}}/>
                <View style={{left:10}}>
                    <Text style={{fontFamily:fonts.primary[600]}}>Noval</Text>
                    <Text style={{fontFamily:fonts.primary[600]}}>123123123123123123123</Text>
                </View>
            </View>

            <TouchableNativeFeedback>
                <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, alignItems:'center', height:40}}>
                    <Text style={{color:'white', fontFamily:fonts.primary[600], textAlign:'center'}}>Detail</Text>
                </View>
            </TouchableNativeFeedback>
        </View>


        <MyGap jarak={20}/>
             {/* DATA 5 */}
             <View style={{padding:10, backgroundColor:"white", borderRadius:5, flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
            <View style={{flexDirection:"row", alignItems:'center'}}>
                <Image source={require('../../assets/userprofiledummy.png')} style={{height:30, width:30}}/>
                <View style={{left:10}}>
                    <Text style={{fontFamily:fonts.primary[600]}}>Noval</Text>
                    <Text style={{fontFamily:fonts.primary[600]}}>123123123123123123123</Text>
                </View>
            </View>

            <TouchableNativeFeedback>
                <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, alignItems:'center', height:40}}>
                    <Text style={{color:'white', fontFamily:fonts.primary[600], textAlign:'center'}}>Detail</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <MyGap jarak={20}/>
             {/* DATA 6 */}
             <View style={{padding:10, backgroundColor:"white", borderRadius:5, flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
            <View style={{flexDirection:"row", alignItems:'center'}}>
                <Image source={require('../../assets/userprofiledummy.png')} style={{height:30, width:30}}/>
                <View style={{left:10}}>
                    <Text style={{fontFamily:fonts.primary[600]}}>Noval</Text>
                    <Text style={{fontFamily:fonts.primary[600]}}>123123123123123123123</Text>
                </View>
            </View>

            <TouchableNativeFeedback>
                <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, alignItems:'center', height:40}}>
                    <Text style={{color:'white', fontFamily:fonts.primary[600], textAlign:'center'}}>Detail</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <MyGap jarak={20}/>
             {/* DATA 7 */}
             <View style={{padding:10, backgroundColor:"white", borderRadius:5, flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
            <View style={{flexDirection:"row", alignItems:'center'}}>
                <Image source={require('../../assets/userprofiledummy.png')} style={{height:30, width:30}}/>
                <View style={{left:10}}>
                    <Text style={{fontFamily:fonts.primary[600]}}>Noval</Text>
                    <Text style={{fontFamily:fonts.primary[600]}}>123123123123123123123</Text>
                </View>
            </View>

            <TouchableNativeFeedback>
                <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, alignItems:'center', height:40}}>
                    <Text style={{color:'white', fontFamily:fonts.primary[600], textAlign:'center'}}>Detail</Text>
                </View>
            </TouchableNativeFeedback>
        </View>


             <MyGap jarak={20}/>
             {/* DATA 8 */}
             <View style={{padding:10, backgroundColor:"white", borderRadius:5, flexDirection:"row", justifyContent:'space-between', alignItems:"center"}}>
            <View style={{flexDirection:"row", alignItems:'center'}}>
                <Image source={require('../../assets/userprofiledummy.png')} style={{height:30, width:30}}/>
                <View style={{left:10}}>
                    <Text style={{fontFamily:fonts.primary[600]}}>Noval</Text>
                    <Text style={{fontFamily:fonts.primary[600]}}>123123123123123123123</Text>
                </View>
            </View>

            <TouchableNativeFeedback>
                <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, alignItems:'center', height:40}}>
                    <Text style={{color:'white', fontFamily:fonts.primary[600], textAlign:'center'}}>Detail</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
         
    </View>
    </ScrollView>
    {/* NANTI DI BAWAH ADA TOMBOL NEXT DAN BACK DAN ADA NOMOR NYA,  CONTOHNYA ADA DI DESAIN FIGMA PERJADIN */}
   

    {/* MOTIF VECTOR HIASAN */}
    <Image source={require('../../assets/motif.png')} style={{
        width:360,
        height:33,
        alignSelf:"center"

    }}/>
    
    </View>
  )
}