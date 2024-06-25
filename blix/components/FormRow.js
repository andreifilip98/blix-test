import * as React from 'react';
import { View } from "react-native";
import { Text } from "react-native-paper"
import { TextInput } from "react-native-paper";

const FormRow = ({ name, field }) => {

    const [text, setText] = React.useState("");

    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text>{name}</Text>
            <TextInput
                numberOfLines={1}
                style={{ width: 200, overflow: "hidden" }}
                mode='outlined'
                label={field}
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>
    );
}

export default FormRow;