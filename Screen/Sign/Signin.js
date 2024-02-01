import { useState } from "react";
import { WebView, WebViewNavigation } from "react-native-webview";
import { KAKAO_AUTH_URL } from "../../OAuth";
import { useNavigation } from '@react-navigation/native';

const Signin = () => {
  const navigation = useNavigation();
  const handleShouldStartLoad = (event: WebViewNavigation) => {
    const url = event.url;
    // url에 붙어오는 code= 가있다면 뒤부터 parse하여 인가 코드 get
    const exp = "code=";
    const searchIdx = url.indexOf(exp);
    if (searchIdx !== -1) {
      const code = url.substring(searchIdx + exp.length);
      console.log("인가 코드", code);

      // 인가코드를 백엔드로 보내기 위한 
      sendAuthorizationCodeToBackend(code);
      // 로그인 성공시 Navigate to 'ClubStart' 
      navigation.navigate('ClubStart')
      return false;
    }
    return true;

  };
  const sendAuthorizationCodeToBackend = async (code) => {
    const backendEndpoint = 'http://ec2-13-125-164-0.ap-northeast-2.compute.amazonaws.com:8080/login/oauth2/code/kakao';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    };

    try {
      console.log ('Request Body:',options.body)
      const response = await fetch(backendEndpoint, options);
      const data = await response.json();
      console.log('Backend response:', data);

    
    } catch (error) {
      console.error('Error sending authorization code to backend:', error);
    }
  };


  return (
    <WebView
      className="flex"
      // 웹뷰 보여줄 페이지 주소
      source={{
        uri: KAKAO_AUTH_URL,
      }}
      onShouldStartLoadWithRequest={handleShouldStartLoad}
    />
  );



}

export default Signin;