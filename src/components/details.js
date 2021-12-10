import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class Details extends Component {
    render() {
        return (
            <View style={styles.formData}>
                <TextInput placeholder='Name of the card ' style={styles.textInputLong} value={this.props.value} onChangeText={this.props.onChange} />
                <TextInput placeholder='16 digit number ' style={styles.textInputLong} value={this.props.CNum} onChangeText={this.props.onChangeCNum} />

                <View style={styles.shortInput}>
                    <TextInput placeholder='Expiration date' style={styles.textInputShort} value={this.props.Edate} onChangeText={this.props.OnChangeEdate} />
                    <TextInput placeholder='Cvv' style={styles.textInputShort} value={this.props.Cvv} onChangeText={this.props.OnChangeCvv} />
                </View>

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
        flexDirection: 'row'
    },
    textInputShort: {
        borderWidth: 1,
        margin: 12,
        padding: hp('2%'),
        width: wp('40%'),
        borderColor: '#A5A5A5',
        borderRadius:12
    }
})

export default Details
