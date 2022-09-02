import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import Carousel from "react-native-anchor-carousel";
import { useRef } from 'react';

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
    carousel: {
        flexGrow: 0,
        height: 150
    },
    sliderWrapper: {
        flex: 1,
        paddingStart: 20,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: '#fff'
    },
    slider: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: 15,
        backgroundColor: '#fff'

    }

})

const HomeSlider = () => {

const carouselRef = useRef(null);

    const data = [
        {link: 'https://i.pinimg.com/736x/3e/2a/c2/3e2ac2196a515daa74ab14e90286269e.jpg'},
        {link: 'https://i.pinimg.com/736x/3e/2a/c2/3e2ac2196a515daa74ab14e90286269e.jpg'},
        {link: 'https://i.pinimg.com/736x/3e/2a/c2/3e2ac2196a515daa74ab14e90286269e.jpg'},
        {link: 'https://i.pinimg.com/736x/3e/2a/c2/3e2ac2196a515daa74ab14e90286269e.jpg'},
        {link: 'https://i.pinimg.com/736x/3e/2a/c2/3e2ac2196a515daa74ab14e90286269e.jpg'},
        {link: 'https://i.pinimg.com/736x/3e/2a/c2/3e2ac2196a515daa74ab14e90286269e.jpg'},
    ]

    function renderItem({ item, index }) {
        const { link } = item;

        return (
            <View style={styles.slider}>
                {/* <Image 
                    source={{uri: link}}
                    style={{
                        flex: 1,
                        width: 100,
                        height: 100
                    }}
                    resizeMode='cover'
                /> */}

                <Text>Hello Alan</Text>
            </View>
        );
    }

  return (
    <View style={styles.sliderWrapper}>
        <Carousel
            style={styles.carousel}
            data={data}
            renderItem={renderItem}
            itemWidth={0.35 * windowWidth}
            inActiveOpacity={0.3}
            containerWidth={windowWidth}
            ref={carouselRef}
        />
    </View>
  )
}

export default HomeSlider