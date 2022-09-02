import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        backgroundColor: '#0AA2ED',
        padding: 12.5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',

    },
})

const UIButtons = () => {
  return (
    <TouchableOpacity style={styles.btn}>
        <Text style={{color: '#fff', fontSize: 14, fontWeight: 'medium'}}>View More</Text>
    </TouchableOpacity>
  )
}

export default UIButtons