import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TouchableHighlight } from 'react-native';

//import {render} from "react-dom";
import Icon from 'react-native-vector-icons/FontAwesome5'
//import { faHome } from "@fortawesome/free-solid-svg-icons";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function ProfileScreen() {
    return (
        <SafeAreaView 
            //background styling
            style={{
                backgroundColor: "#fff",
                flex: 1,
                fontFamily: "Arial",
            }}>

                {/* nav bar */}
                <View style={{
                    backgroundColor: "white",
                    flex: .2,
                    justifyContent: 'center',            
                }}>
                    <Text style={{textAlign: 'center'}}> Profile </Text>
                </View>

                {/* header */}
                <View style={{
                    backgroundColor: "white",
                    flex: .5,
                    flexDirection: "row",
                    marginLeft: 40,
                    marginRight: 40,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    {/* profile */}
                    <View style={{
                        flex:1,
                        alignItems: 'center',
                    }}>
                        {<Icon
                            name = "user"
                            size = {40}
                        /> }
                        <Text> John Doe </Text>
                        <Text style = {{fontSize: 10}}> San Francisco </Text>
                    </View>

                    {/* book apt container */}
                    <View style={{
                        flex: 2.5,
                        alignItems: 'center',
                    }}>
                        <View style={{
                            backgroundColor: "dodgerblue",
                            borderRadius: 25,
                            }}>
                            <Text style={{
                                color: "white", 
                                paddingTop: 12
                            }} > Book an Appointment {"\n"}</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    backgroundColor: "#F1F9FF",
                    flex: .4,
                    marginBottom: 20,
                    justifyContent: 'center',            
                }}>
                    <Text style={styles.titleText}> Last Appointment: November 3, 2020 </Text>
                </View>
                <View style={styles.roundedRectangle}>
                    <Text style={styles.titleText}> My Current Medications </Text>
                    <Text style={{color: "black", fontWeight: "bold", textAlign: "center", marginTop: 30, fontSize: 15,borderColor: "black", borderWidth: 2}}> Levothyroxine </Text>
                </View>
                <View style={styles.roundedRectangle}>
                    <Text style={styles.titleText}> My Physicians </Text>
                    {<Icon style={{
                        marginTop: 50,
                    }}
                        name = "user"
                        size = {40}
                    /> }
                    <Text style={{color: "black", fontWeight: "bold", textAlign: "center", paddingTop: 10, fontSize: 10 }}> Dr.Doctor </Text>
                </View>
                <View style={styles.roundedRectangle}>
                    <Text style={styles.titleText}> My Old Medications </Text>
                </View>
        </SafeAreaView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    roundedRectangle: {
        backgroundColor: "#F1F9FF",
        flex: 1,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40, 
        borderRadius: 25,
        alignItems: 'center',
    },
    titleText: {
        color: "#3476EB", 
        fontWeight: "bold", 
        textAlign: "center", 
        paddingTop: 10, 
        fontSize: 18,
    },
  });