import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    TextInput,
} from 'react-native';
import normalize from '../Helper/Normalize';
import Dropdown from '../Helper/Dropdown';
import SubDropdown from '../Helper/SubDropdown';


const Screen1 = () => {
    const [email, setEmail] = useState(null);
    const [mob, setMob] = useState(null);
    const [name, setName] = useState(null);
    const [interest, setInterest] = useState(null);
    const [subinterest, setSubInterest] = useState(null);
    const [basis, setBasis] = useState(null);
    const onSelect = (item) => {
        setInterest(item)
        setSubInterest(null)
        // setBasis(item.name)
    }
    const onSelectsub = (subitem) => {
        setSubInterest(subitem)
    }

    console.log(interest)
    console.log(subinterest)
    return (
        <ScrollView styles={styles.Container}>
            <View style={styles.FirstView}>
                <Text style={styles.Heading}>SolutionInsol</Text>
                {/* Image to be inserted */}
            </View>
            <View style={styles.SecondView}>
                <Text>
                    Please fill the following details:
                </Text>
                <TextInput style={styles.Input} autoCapitalize="none" placeholder="Name" onChangeText={newName => setName(newName)}></TextInput>
                <TextInput style={styles.Input} autoCapitalize="none" placeholder="Email" onChangeText={newEmail => setEmail(newEmail)}></TextInput>
                <TextInput style={styles.Input} placeholder="Mobile Number" onChangeText={newMobile => setMob(newMobile)}></TextInput>
                <Dropdown value={interest} onSelect={onSelect}/>
                <SubDropdown subvalue={subinterest} basis ={interest} onSelectsub={onSelectsub}/>
            </View>
        </ScrollView>








    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 20
    },

    FirstView: {
        flex: 1,

    },

    SecondView: {
        flex: 2,
        padding: 20
    },

    Heading: {
        fontWidth: 50,
        marginLeft: 2,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    Input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 16,
        minHeight: 40,

    },
});
export default Screen1;