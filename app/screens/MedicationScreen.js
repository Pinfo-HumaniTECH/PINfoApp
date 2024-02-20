import React from 'react';
import { useState } from "react";
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, Text, TextInput, Image, SafeAreaView, Modal, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './Styles.js'
// import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { Card } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
const medicationImages = {
    loperamide: require('./Loperamide.png'), 
    bisacodyl: require('./Bisacodyl.png'), 
    acetometophin: require('./Acetometophin.png'), 
  };

class MedicationScreen extends React.Component {
    state = {
        modalVisible: false,
        name: 'Medication Name',
        info: 'Medication Info',
        img: './pillIcon.png',
        imageLoad: true
      };

    updateSearch = (search) => {
        this.setState({search});
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    
    onChangeText = (text) => {
        this.setState({name: text});
    }
    onChangeText2 = (text) => {
        this.setState({info: text});
    }


    save = (name, info) => {
        alert('name: ' + name + ' info: ' + info);
        if (name === 'Bisacodyl' || name === 'bisacodyl' ) {
            this.setState({imageLoad: false})
            this.setState({img: medicationImages['bisacodyl']})
        }
        if (name === 'Loperamide' || name === 'loperamide' ) {
            this.setState({imageLoad: false})
            this.setState({img: medicationImages['loperamide']})
        }
        if (name === 'Acetaminophen' || name === 'acetaminophen' ) {
            this.setState({imageLoad: false})
            this.setState({img: medicationImages['acetometophin']})
        }
     }
   
    render() {        
        // const [text, onChangeText] = React.useState('Useless Text');
        const onPress = () => {
            console.log('test');
        };
        return (
            <SafeAreaView style = {styles.screenTitle}>
                <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
            <View style={styles.card}>       
                <Card>
                <Image style={{height: '50px', width: '50px', position: 'relative', left: '45%'}}source={require('./pillIcon.png')} />
      <TextInput style = {styles.input}
               placeholder = "Insert Medicine Name"
               onChangeText = {this.onChangeText}/>
          <Card.Divider />
          <TextInput style = {styles.input}
               placeholder = "Insert Medicine Information"
               onChangeText = {this.onChangeText2}/>
               
        </Card>
        <TouchableOpacity
               style={styles.SubmitButtonSmall}
               onPress = {
                  () => this.save(this.state.name, this.state.info)
               }>
               <Text style={styles.whiteText25}> Submit </Text>
            </TouchableOpacity>
        </View>
        
            <TouchableOpacity
                style={styles.SubmitButtonMed}
                activeOpacity = { .5 }
                onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
            >
                <Text style={styles.whiteText25}>Close Medication Screen</Text>
            </TouchableOpacity>
          </Modal>
                <View style={{
                    justifyContent: 'center'
                }}>
                    <Text style={{marginTop: '15px', textAlign: 'center', color: 'white', fontSize: '35px'}} > Medication </Text>
                </View>
                {/* <div style={styles.cardDiv}>
                    <Text> Medication Name </Text>
                    </div> */}
                <View style={styles.card}>       
                <Card>
                {this.state.imageLoad && <Image style={{height: '50px', width: '50px', position: 'relative', left: '45%'}}source={require('./pillIcon.png')} />}
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Divider />
          <Text>{this.state.info}</Text>
          {!this.state.imageLoad && <Image style={{width: '300px', height: '275px', aspectRatio: 1, alignSelf: 'center'}}
            source={this.state.img}
            resizeMode="contain"/>}
        </Card>
        </View>
        <TouchableOpacity
                style={styles.SubmitButtonMed}
                activeOpacity = { .5 }
                onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
            >
                <Text style={styles.whiteText25}>Add Medication</Text>
            </TouchableOpacity>
            </SafeAreaView>
        );
    }
}


export default MedicationScreen;