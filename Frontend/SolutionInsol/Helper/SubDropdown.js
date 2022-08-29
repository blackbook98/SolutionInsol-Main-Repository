import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import DropdownImage from './Constants/DropdownImage'

let Audit = [{ Id: 4, Name: 'Audit1' },
{ Id: 5, Name: 'Audit2' },
{ Id: 6, Name: 'Audit3' },]

let Finance = [{ Id: 4, Name: 'Finance1' },
{ Id: 5, Name: 'Finance2' },
{ Id: 6, Name: 'Finance3' },]

let Compliance = [{ Id: 4, Name: 'Compliance1' },
{ Id: 5, Name: 'Compliance2' },
{ Id: 6, Name: 'Compliance3' },]


const SubDropdown = ({
    subvalue = {},
    basis = {},
    onSelectsub = () => { }
}) => {
    const [show, setShow] = useState(false);
    const [cur, setCur] = useState(null);
    const onSelectedItem = (val) => {
        setShow(false)
        onSelectsub(val)

    }


    const initialize = () => {
        setShow(!show)
        if (basis === null)
            return (
                <View><Text>
                    Select an Area of Interest
                </Text>
                </View>
            )
        switch (basis.Name) {
            case "Audit": setCur(Audit); break;
            case "Finance": setCur(Finance); break;
            case "Compliance": setCur(Compliance); break;
            default: break;
        }
    }

    console.log("Basis", basis)
    return (
        <View style={styles.firstView}>
            <TouchableOpacity style={styles.drop} activeOpacity={0.8} onPress={() => initialize()}>
                <Text>
                    {!!subvalue ? subvalue?.Name : "Choose an option"}
                </Text>
                <Image style={{ transform: [{ rotate: show ? "180deg" : "0deg" }] }} source={DropdownImage.imgDef} />
            </TouchableOpacity>
            {show && cur && <View >

                {cur.map((val, i) => {
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

export default SubDropdown;