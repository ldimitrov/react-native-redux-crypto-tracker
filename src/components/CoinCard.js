import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 10,
        borderBottomColor: "#C2EFEB",
        borderBottomWidth: 3,
        padding: 10,
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
        color: 'white'
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        color: 'white'
    },
    seperator: {
        marginTop: 10,
        color: 'white'
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
        color: 'white'
    },
    image: {
        width: 40,
        height: 40,
    },
    moneySymbol: {
        fontWeight: "bold",
        color: 'white'
    },
    statisticsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    percentChangePlus: {
        color: "#86B854",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#FF5E5B",
        fontWeight: "bold",
        marginLeft: 5
    }
})

const {
    container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    percentChangeMinus
} = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {

    return (
        <View style={container}>

            <View style={upperRow}>
                <Image
                    style={styles.image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={coinName}>{coin_name}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={coinPrice}>{price_usd}
                    <Text style={moneySymbol}> $ </Text>
                </Text>
            </View>

            <View style={statisticsContainer}>

                <Text style={{ color: 'white' }}>24h:
                     <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus}> {percent_change_24h} % </Text>
                </Text>
                <Text style={{ color: 'white' }}>7d:
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus}> {percent_change_7d} % </Text>
                </Text>

            </View>

        </View>
    );
}

export default CoinCard;