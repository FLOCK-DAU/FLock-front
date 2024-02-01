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
      // 로그인 성공시 Navigate to 'ClubStart'  
      navigation.navigate('ClubStart')
      return false;
    }
    return true;
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