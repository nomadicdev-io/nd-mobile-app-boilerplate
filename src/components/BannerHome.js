import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'; 
import UIButtons from './UIButtons';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'relative'
    },
    playWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,

    },
    playContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(255,255,255,0.25)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.25)',
        borderStyle: 'dashed'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 28,
        marginBottom: 16
    },
    btn: {
        width: '100%',
        backgroundColor: '#0AA2ED',
        padding: 12.5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',

    },
    tag: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 16
    }

})

const BannerHome = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground 
        source={{uri: 'https://www.teahub.io/photos/full/283-2836496_iphone-wallpaper-switzerland-bern-night-city-houses-bern.jpg'}}
        style={{flex: 1}}
        resizeMode='cover'
      >

        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,1)']}
            style={{
                flex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0,
                width: '100%',
                height: '100%',
            }}
        />   

        <View style={styles.playWrapper}>
            <TouchableOpacity style={styles.playContainer}>
            <Entypo name="controller-play" size={54} color="white" />
            </TouchableOpacity>
        </View>

        <View style={styles.content}>
            <View style={{alignItems: 'flex-start'}}>
             <View style={styles.tag}><Text style={{color: '#0AA2ED', fontWeight: 'bold', fontSize: 12}}>Travel</Text></View>
            </View>
            <Text style={styles.title}>Things I have planned is to split up the repo into a monorepo.</Text>
            <UIButtons />
        </View>

      </ImageBackground> 

        
        

    </View>
  )
}

export default BannerHome