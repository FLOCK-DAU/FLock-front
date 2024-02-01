import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from "../Screen/Sign/Start";
import Signin from "../Screen/Sign/Signin";
import Signup from "../Screen/Sign/Signup";
import FindAccount from './Sign/FindAccount';
import PhoneNumberVerification from './Sign/PhoneNumberVerification';
import ClubStart from './Club/ClubStart'
import SigninHandeler from './Sign/SigninHandeler';
import ClubCategory from './Club/ClubCategory';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
       
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="FindAccount" component={FindAccount} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneNumberVerification" component={PhoneNumberVerification} options={{ headerShown: false }} />
        <Stack.Screen name="ClubStart" component={ClubStart} options={{ headerShown: false }} />
        <Stack.Screen name="SigninHandeler" component={SigninHandeler} options={{ headerShown: false }} />
        <Stack.Screen name="ClubCategory" component={ClubCategory} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}