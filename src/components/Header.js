import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation'

const Header = () => {    
    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={header}>
                Cryptocurrency Tracker
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontWeight: "bold",        
        fontSize: 25,
        color: 'white'
    },
    safeArea: {
        alignItems: "center",
        backgroundColor: 'rgb(39,63,91)'
      }
})

const { safeArea, header } = styles;


export default Header;