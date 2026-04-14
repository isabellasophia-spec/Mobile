import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Background } from "@react-navigation/elements";
import { setStatusBarBackgroundColor } from "expo-status-bar";

export default function TabLayout(){
  return(
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ff3d7e9c',
        headerStyle: {
          backgroundColor: 'pink',
        },
 
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: 'pink',
        },
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'flower' : 'flower-outline'} color={color} size={24}/>

            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'flower-pollen' : 'flower-pollen-outline'} color={color} size={24}/>

            ),
          }}
        />

        <Tabs.Screen
          name="toDoList"
          options={{
            title: 'Lista de Tarefas',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'clipboard-list' : 'clipboard-outline'} color={color} size={24}/>

            ),
          }}
        />

        <Tabs.Screen
          name="galeriaDeFotos"
          options={{
            title: 'Galeria',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'view-gallery' : 'view-gallery-outline'} color={color} size={24}/>

            ),
          }}
        />
    </Tabs>
  );
} 