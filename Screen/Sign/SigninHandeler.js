import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const SigninHandeler = ({ navigation }) => {
  const route = useRoute();
  const { code } = route.params || {};
  const { url } = route.params;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        console.log('Attempting Kakao login');
        const response = await axios.get(`${process.env.REACT_APP_REDIRECT_URL}/?code=${code}`, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });

        const kakaoName = response.data.account.kakaoName;
        await AsyncStorage.setItem('name', kakaoName);
        navigation.navigate('OwnerQuestion');
      } catch (error) {
        console.error('Error during Kakao login:', error);
        // Handle error appropriately (e.g., show an error message)
      }
    };

    // Check if the user has interacted with the WebView (e.g., agreed to login)
    if (code && !loading) {
      setLoading(true);
      kakaoLogin();
    }
  }, [code, loading, navigation]);

  const handleNavigationStateChange = (newNavState) => {
    // Check if the new URL contains the expected parameter indicating a successful login
    if (newNavState.url.includes('code=')) {
      setLoading(true);
    }
  };
  

  return (
    <View style={styles.loginHandler}>
      <WebView
        source={{ uri: url }}
        onNavigationStateChange={handleNavigationStateChange}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.notice}>
            <Text>로그인중입니다</Text>
            <Text>잠시만 기다려주세요</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginHandler: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notice: {
    alignItems: 'center',
  },
});

export default SigninHandeler;
