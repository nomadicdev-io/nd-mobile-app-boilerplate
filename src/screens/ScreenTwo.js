import { View, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import BannerHome from '../components/BannerHome'
import HomeSlider from '../components/HomeSlider'

const styles = StyleSheet.create({
    bannerWrapper: {
        flex: 1
    },
    contentWrapper: {
      
    }
})

const ScreenTwo = () => {
  return (
   <View style={{flex: 1, backgroundColor: "#000"}}>

        <StatusBar 
            animated={true}
            barStyle={'light-content'}
            translucent={true}
            backgroundColor={'transparent'}
        />

        <View style={styles.bannerWrapper}>
            <BannerHome />
        </View>

        <View style={styles.contentWrapper}>
            <HomeSlider />
        </View>

   </View>
  )
}

export default ScreenTwo