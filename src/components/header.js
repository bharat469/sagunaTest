import React, { Component } from 'react'
import { Text, TouchableOpacity, View,StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                 <Text style={styles.addressText}> {this.props.address} </Text>
                <TouchableOpacity>
                    <Text style={styles.btnChange}>{this.props.button}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles= StyleSheet.create({
header:{
    margin:12
},
addressText:{
    width:wp('60%'),
    fontWeight:'500',
    letterSpacing:0.6,
 fontSize:hp('2%'),
   },
   btnChange:{
marginTop:12,
fontSize:hp('2%'),
color:'#7400b8'
   }
})

export default Header
