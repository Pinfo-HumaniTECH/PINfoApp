import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TouchableHighlight } from 'react-native';

function ProfileScreen(props) {
    return (
        <SafeAreaView 
            style={{
                backgroundColor: "#fff",
                flex: 1,
                fontFamily: "Arial",
            }}>
                <View style={{
                    backgroundColor: "white",
                    flex: .2,
                    justifyContent: 'center',            
                }}>
                    <Text style={{textAlign: 'center'}}> Profile </Text>
                </View>
                <View style={{
                    backgroundColor: "white",
                    flex: .5,
                    flexDirection: "row",
                    marginLeft: 40,
                    marginRight: 40,
                    justifyContent: 'center',

                }}>
                    <View style={{flex: 1}}>
                        {/* Image */}
                    </View>
                    <View style={{flex: 1}}>
                        <Text> John Doe </Text>
                    </View>
                    <TouchableHighlight>
                        <View style={{
                            flex: 1,
                            backgroundColor: "dodgerblue",
                            marginBottom: 40,
                            borderRadius: 25,
                            }}>
                            <Text style={{color: "white", paddingTop: 10}} > Book an Appointment </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    backgroundColor: "#F1F9FF",
                    flex: .4,
                    marginBottom: 20,
                    justifyContent: 'center',            
                }}>
                    <Text style={{color: "#3476EB", textAlign: "center", paddingTop: 10, fontSize: 18 }}> Last Appointment: November 3, 2000 </Text>
                </View>
                <View style={styles.roundedRectangle}>
                    <Text style={{color: "#3476EB", fontWeight: "bold", textAlign: "center", paddingTop: 10, fontSize: 18 }}> My Current Medications </Text>

                </View>
                <View style={styles.roundedRectangle}>
                    <Text style={{color: "#3476EB", fontWeight: "bold", textAlign: "center", paddingTop: 10, fontSize: 18 }}> My Physicians </Text>
                </View>
                <View style={styles.roundedRectangle}>
                    <Text style={{color: "#3476EB", fontWeight: "bold", textAlign: "center", paddingTop: 10, fontSize: 18 }}> My Old Medications </Text>
                </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    roundedRectangle: {
        backgroundColor: "#F1F9FF",
        flex: 1,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40, 
        borderRadius: 25,   
    },
  });

export default ProfileScreen;