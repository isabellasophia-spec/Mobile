import { HeaderShownContext } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout(){
  return(
    <>
      <StatusBar style="light"/>
      <Stack
          screenOptions={{
            headerStyle: { backgroundColor: 'pink'},
            headerShadowVisible: false,
            headerTintColor: '#fff',
          }}         
        >

        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
        <Stack.Screen name="+not-found"/>
      </Stack>
    </>
  );    
} 