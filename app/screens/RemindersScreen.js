import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TouchableHighlight, TouchableOpacity, useWindowDimensions} from 'react-native';
import { COLORS } from './Colors.js'
import styles from './Styles.js'

function RemindersScreen() {
    
    const window = useWindowDimensions  ();
    const spacing = 6;
    const circleWidth = Math.round((window.width - (spacing * 16)) / 7);
    const daysOfWeek = ["08", "09", "10", "11", "12", "13", "14"];
    const dayButtons = [];
    const currentDate = "11"

    //for each day of week, populate circles
    daysOfWeek.forEach((day) => {

        //make the background color purple if its the current day and add today text
        if (currentDate == day) {
            dayButtons.push(
                <View>
                    <TouchableOpacity
                        style={[styles.roundButton, {height: circleWidth, width: circleWidth, backgroundColor: COLORS.purple}]}
                        activeOpacity = {.5}
                    >
                        <Text style={styles.calendarNums}>{day}</Text>
                    </TouchableOpacity>
                    <Text style={styles.todayText}>Today</Text>
                </View>
            )

        } else {
            dayButtons.push(
                <TouchableOpacity
                    style={[styles.roundButton, {height: circleWidth, width: circleWidth}]}
                    activeOpacity = { .5 }
                >
                    <Text style={styles.calendarNums}>{day}</Text>
                </TouchableOpacity>
            )
        }
       
    })        

    return (
        
        //bg styling
        <SafeAreaView style={styles.container}>

            {/* Header bar */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Reminders</Text>
            </View> 

            {/* Container for days of week */}
            <View style={styles.calendarContainer} >
                {dayButtons}
            </View>

            {/* Medication cards */}
            <View style={styles.medCardContainer}>
                <TouchableOpacity
                    style={styles.medCard}
                    activeOpacity = { .5 }
                >
                    <View style={styles.innerMedContainer}>  
                        {/* left side */}
                        <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
                            <Text>PILL</Text>
                        </View>
                        {/* right side */}
                        <View style={{flex: 7, flexDirection: 'column'}}>   
                            <View>                                
                                <Text style={styles.medCardTitle}>Advil</Text>
                            </View>         
                            <View style={{flexDirection: 'row', marginTop: 8}}>
                                <Text style={[styles.medCardIcons, {marginLeft: 0}]}>Place holder Icon</Text>
                                <Text style={styles.medCardIcons}>Place holder Icon</Text>
                            </View>                
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            

        </SafeAreaView>
    );
}

export default RemindersScreen; 
  