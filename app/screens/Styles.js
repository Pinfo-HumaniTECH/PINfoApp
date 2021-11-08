import { StyleSheet } from 'react-native';
import { COLORS } from './Colors.js'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const circleSpacing = 6;

export default StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        fontFamily: "Arial",
    },
    header: {
        justifyContent: 'center',     
    },
    headerText: {
        marginTop: 16,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: "bold", 
        color: "black",    
    },
    whiteText25: {
        fontSize: 25,
        textAlign: 'center',
        color: "white",
    },
    purpleText16: {
        fontSize: 16,
        marginBottom: 24,
        textAlign: 'center',
        color: COLORS.purple,
    },
    SubmitButtonStyle: {
        marginTop: 24,
        marginBottom: 4, 
        paddingTop:8,
        paddingBottom:8,
        marginRight: 16,
        marginLeft: 16,
        backgroundColor: COLORS.purple,
        borderRadius:15,
      },
    
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
    roundButton: { 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: COLORS.mediumGray,
    marginLeft: circleSpacing,
    marginRight: circleSpacing,
    },

    calendarNums: {
        textAlign: 'center',
        color: 'white',
        fontSize: RFPercentage(2),
    },
    todayText: { 
        marginTop: 4,
        fontSize: RFPercentage(2.3),
        textAlign: 'center',
        color: COLORS.purple,
    },
    calendarContainer: {
        flexDirection: "row",
        marginTop: 16,
        marginLeft: circleSpacing,
        marginRight: circleSpacing,
      },
    medCard: {
        marginTop: 16,
        marginBottom: 16, 
        paddingTop: 48,
        paddingBottom: 48,
        marginRight: 16,
        marginLeft: 16,
        backgroundColor: 'white',
        borderRadius:15,
        borderWidth: 5,
        borderColor: COLORS.purple,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.30,
        shadowRadius: 11,
      },
      medCardContainer: {
          marginTop: 16,

      },
});