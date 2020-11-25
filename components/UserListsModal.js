import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, Button, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const DATA = [
    { name: 'Setlist Name' },
    { name: 'Setlist Name2' },
    { name: 'Setlist Name3' },
    { name: 'Setlist Name4' },
    { name: 'Setlist Name5' }
]

const UserListsModal = (props) => {

    return (
        <Modal
            style={styles.modal}
            visible={props.isVisible}
            transparent='true'
        >
            <ScrollView contentContainerStyle={styles.userListContainer}>

                {DATA.map((setlist, index) => {
                    return (
                        <Text style={styles.text} key={index}>{setlist.name}</Text>)
                })}
                <TouchableOpacity
                    style={styles.button}
                    onPress={props.closeModal} >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>

            </ScrollView>
        </Modal >
    )
};

const styles = StyleSheet.create({
    userListContainer: {
        flex: 1,
        backgroundColor: 'rgba(46, 44, 44, 0.1)',
        marginTop: '75%',
        alignContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: "gold",
        fontSize: 30,
        textAlign: 'center',
        padding: 5
    },
    modal: {
        flex: 1,
        height: '50%',
        justifyContent: 'center'
    },
    button: {
        color: 'red',
        width: 100,
        height: 50,
        marginTop: 25
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center',
        color: 'red',


    }

})

export default UserListsModal;
