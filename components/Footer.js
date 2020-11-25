import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>© 2020 JT Productions</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20
    },
    footerText: {
        color: 'white'
    },
});

export default Footer;