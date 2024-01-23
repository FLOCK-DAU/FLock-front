import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import kakaoLoginImage from '../../assets/images/kakao_login.png'; // Updated import path

const Start = () => {
    const navigation = useNavigation();

    const goToSignin = () => {
        navigation.navigate("Signin");
    };

    const goToSignup = () => {
        navigation.navigate("Signup");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.logoText}>FLOCK</Text>
                <Text style={styles.introText}>언제나 어디서나 취미를 잇다.</Text>
            </View>
            <View style={styles.down}>
                <TouchableOpacity style={styles.signup} onPress={goToSignup}>
                    <Text style={styles.buttonText}>시작하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signin} onPress={goToSignin}>
                    <Text style={styles.buttonText}>카카오톡으로 로그인</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 7,
        alignItems: "center",
    },
    down: {
        flex: 3,
        alignItems: "center",
    },
    logoText: {
        color: "#1b444b",
        fontSize: 60,
        textAlign: "center",
        marginTop: 150,
        fontWeight: "600",
    },
    introText:{
        color: "#1b444b",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "400",
    },
    buttonText: {
        textAlign: "center",
        marginTop: 12,
        color: "black",
    },
    signin: {
        height: 50,
        width: 300,
        margin: 10,
        backgroundColor: "#fee501",
        //elevation: 10,
    },
    signup: {
        height: 50,
        width: 300,
        backgroundColor: "white",
        margin: 10,
        //elevation: 10,
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
});

export default Start;
