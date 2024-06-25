import * as React from 'react';
import { View } from "react-native";
import { Button, Text } from "react-native-paper"
import FormRow from "../components/FormRow";
import { TextInput } from "react-native-paper";
import { Switch } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";

export const MainScreen = () => {

    const [fieldType, setFieldType] = React.useState("Advanced");
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [serverAddress, setServerAddress] = React.useState("");
    const [serverPath, setServerPath] = React.useState("");
    const [port, setPort] = React.useState("");
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [showDropDown, setShowDropDown] = React.useState(false);

    const list = [
        {
            label: "Advanced",
            value: "Advanced",
        },
        {
            label: "Manual",
            value: "Manual",
        }
    ];

    return (
        <View style={{ flex: 1, alignContent: "center", alignItems: "center", marginTop: "20%", width: "80%" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 300 }}>
                <Text>Account Type</Text>
                <DropDown
                    width={200}
                    label={fieldType}
                    mode={"outlined"}
                    visible={showDropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                    value={fieldType}
                    setValue={text => setFieldType(text)}
                    list={list}
                />
            </View>
            {
                fieldType === "Advanced" ?
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>User Name: </Text>
                            <TextInput
                                numberOfLines={1}
                                style={{ width: 200, overflow: "hidden" }}
                                mode='outlined'
                                label={"User Name"}
                                value={userName}
                                onChangeText={setUserName}
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>Password: </Text>
                            <TextInput
                                keyboardType='password'
                                numberOfLines={1}
                                style={{ width: 200, overflow: "hidden" }}
                                mode='outlined'
                                label={"Password"}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>Server Address: </Text>
                            <TextInput
                                numberOfLines={1}
                                style={{ width: 200, overflow: "hidden" }}
                                mode='outlined'
                                label={"Server Address"}
                                value={serverAddress}
                                onChangeText={setServerAddress}
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>Server Path: </Text>
                            <TextInput
                                numberOfLines={1}
                                style={{ width: 200, overflow: "hidden" }}
                                mode='outlined'
                                label={"Server Path"}
                                value={serverPath}
                                onChangeText={setServerPath}
                            />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text>Port: </Text>
                                <TextInput
                                    mode='outlined'
                                    value={port}
                                    onChangeText={text => setPort(text)}
                                />
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                                <Text>Use SSL</Text>
                            </View>
                        </View>
                    </View>
                    :
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>User Name: </Text>
                            <TextInput
                                numberOfLines={1}
                                style={{ width: 200, overflow: "hidden" }}
                                mode='outlined'
                                label={"User Name"}
                                value={userName}
                                onChangeText={setUserName}
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>Password: </Text>
                            <TextInput
                                keyboardType='password'
                                numberOfLines={1}
                                style={{ width: 200, overflow: "hidden" }}
                                mode='outlined'
                                label={"Password"}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>Server Address: </Text>
                            <TextInput
                                numberOfLines={1}
                                style={{ width: 200, overflow: "hidden" }}
                                mode='outlined'
                                label={"Server Address"}
                                value={serverAddress}
                                onChangeText={setServerAddress}
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>Server Path: </Text>
                            <TextInput
                                keyboardType='alphanumeric'
                                numberOfLines={1}
                                style={{ width: 200, overflow: "hidden" }}
                                mode='outlined'
                                label={"Server Path"}
                                value={serverPath}
                                onChangeText={setServerPath}
                            />
                        </View>
                    </View>
            }
            <View>
                <Button style={{ marginTop: 50 }} mode="outlined" onPress={() => {
                    userName !== "" && password !== "" && port > 1 && port < 10000 ?
                        console.log({ "userName": userName }, { "password": password }, { "serverAddress": serverAddress }, { "serverPath": serverPath }, { "port": port }, { "useSSL": isSwitchOn })
                        :
                        console.log("You must complete all the fields above and verify port to be between 1 and 10000")
                }}>
                    Submit
                </Button>
            </View>
        </View >
    );
}

