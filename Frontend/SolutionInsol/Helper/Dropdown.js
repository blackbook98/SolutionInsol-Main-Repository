import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import DropdownImage from './Constants/DropdownImage'

let data = [{
    Id: 1,
    Name: 'Audit'
},
{
    Id: 2,
    Name: 'Finance'
},
{
    Id: 3,
    Name: 'Compliance'
},
]

const Dropdown = ({
    value = {},
    onSelect = () => { }
}) => {
    const onSelectedItem = (val) => {
        setShow(false)
        onSelect(val)

    }
    const [show, setShow] = useState(false);
    return (
        <View style={styles.firstView}>
            <TouchableOpacity style={styles.drop} activeOpacity={0.8} onPress={() => setShow(!show)}>
                <Text>
                    {!!value ? value?.Name : "Choose an option"}
                </Text>
                <Image style={{ transform: [{ rotate: show ? "180deg" : "0deg" }] }} source={DropdownImage.imgDef} />
            </TouchableOpacity>
            {show && <View >

                {data.map((val, i) => {
                    return (
                        <TouchableOpacity key={String(i)} onPress={() => onSelectedItem(val)}>
                            <Text>
                                {val.Name}
                            </Text></TouchableOpacity>
                    )
                })}

            </View>
            }

        </View>

    );

};

const styles = StyleSheet.create({
    firstView: {
        padding: 10
    },
    drop: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 8,
        borderRadius: 5,
        maxHeight: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'

    }
});

export default Dropdown;