import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import Header from '../components/header'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Details from '../components/details';
import Billing from '../components/billing';

export class Home extends Component {
    render() {
        return (
            

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View style={styles.homePage}>
                    <View style={styles.header}>
                        <Text style={styles.headingText}>Confirm Shipping Address</Text>
                        <Header address="123,Pacific BLVD,San Diego California 90372" button="Change" />
                    </View>
                    <ScrollView style={styles.addPayment}>
                        <Text style={styles.headingText}>Add Payment Details</Text>
                        <Details />
                        <View style={styles.billingAddress}>
                            <Text style={styles.headingText}>Billing Address</Text>
                            <Billing />
                        </View>
                    <TouchableOpacity style={styles.buttonPay}>
                        <Text style={styles.buttonText}>Pay Now</Text>
                    </TouchableOpacity>
                        <View style={styles.extra}></View>
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
          
        )
    }
}

const styles = StyleSheet.create({
    homePage: {
        flex: 1
    },
    headingText: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        margin: 12
    },
    extra: {
        marginTop: hp('49%')
    },
    buttonPay:{
        backgroundColor:'#7400b8',
        width:wp('80%'),
        padding:hp('2%'),
        alignItems:'center',
        left:wp('6%'),
        borderRadius:12,
      
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontSize:hp('2%'),
        fontWeight:'bold'
    }
})

export default Home
