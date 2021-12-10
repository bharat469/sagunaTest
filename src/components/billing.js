import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class Billing extends Component {
    render() {
        return (
            <View style={styles.formData}>
                <TextInput placeholder='Street ' style={styles.textInputLong} value={this.props.Street} onChangeText={this.props.onChangeStreet} />
                <TextInput placeholder='City' style={styles.textInputLong} value={this.props.City} onChangeText={this.props.onChangeCity} />

                <View style={styles.shortInput}>
                    <TextInput placeholder='State' style={styles.textInputShort} value={this.props.State} onChangeText={this.props.OnChangeState} />
                    <TextInput placeholder='Zip code' style={styles.textInputShort} value={this.props.Zip} onChangeText={this.props.OnChangeZip} />
                </View>
                <TextInput placeholder='Country' style={styles.textInputLong} value={this.props.Country} onChangeText={this.props.onChangeCountry} />

            </View>
        )
    }
}

const styles = StyleSheet.create({

    textInputLong: {
        borderWidth: 1,
        margin: 12,
        padding: hp('2%'),
        width: wp('87%'),
        borderColor: '#A5A5A5',
        borderRadius:12
    },
    shortInput: {
        flexDirection: 'row',
        borderRadius: 12
    },
    textInputShort: {
        borderWidth: 1,
        margin: 12,
        padding: hp('2%'),
        width: wp('40%'),
        borderColor: '#A5A5A5',
        borderRadius: 12,
        
    }
})

export default Billing
