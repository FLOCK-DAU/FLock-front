import { KAKAO_AUTH_URL } from "../../OAuth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import { View, LogBox, Text } from 'react-native';
import { WebView } from 'react-native-webview';

LogBox.ignoreLogs(['Remote debugger']);
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage("message from webView")`;

const Signin = ({ navigation: { navigate } }) => {
    
    const getCode = async (codeUrl) => {
        const exp = "code=";
        const searchIdx = codeUrl.indexOf(exp);
        if (searchIdx !== -1) {
          const code = codeUrl.substring(searchIdx + exp.length);
          console.log(code);
          
          // Assuming you want to navigate to the "ClubStart" screen upon successful login
          navigate("ClubStart");
        }
      };

    return (
      <View style={{ flex: 1 }}>
        <Text>로그인 화면</Text>
        <WebView
            
          originWhitelist={['*']}
          scalesPageToFit={true}
          style={{ marginTop: 30 }}
          source={{
            uri: KAKAO_AUTH_URL,
          }}
          userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
          injectedJavaScript={INJECTED_JAVASCRIPT}
          javaScriptEnabled={true}
          onMessage={event => {
            const data = event.nativeEvent.url;
            getCode(data);
          }}
          
        />
      </View>
    );
  };
  
  export default Signin;
