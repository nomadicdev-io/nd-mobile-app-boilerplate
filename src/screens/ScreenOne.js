import { View, StatusBar, ImageBackground, Text, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const ScreenOne = ({navigation }) => {
  return (
    <View style={{flex: 1}}>
        <StatusBar 
            animated={true}
            barStyle={'light-content'}
            translucent={true}
            backgroundColor={'transparent'}
        />
       
        <ImageBackground
            source={{uri: 'https://www.whatspaper.com/wp-content/uploads/2021/05/iphone-wallpaper-whatspaper-14.jpg'}}
            resizeMode="cover"
            style={{flex: 1}} 
        >

        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,1)']}
            style={{flex: 0.6}}
        >   
            

        </LinearGradient >

            <View  style={{flex: 0.4, backgroundColor: '#000', padding: 30, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                <Text style={{color: '#fff', fontSize: 16, lineHeight: 24, marginBottom: 30}}>Arabic Lorem Ipsum is the Arabic form of the latin text that is typically used by designers and developers as dummy text. </Text>
                <Button title='Next Page' onPress={()=> navigation.navigate('About')} />
            </View>

        


        </ImageBackground>

    </View>
  )
}

export default ScreenOne