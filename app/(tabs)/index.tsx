import React from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";

export default function Home({ navigation } : { navigation: any }){
  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1468327768560-75b778cbb551"}}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bem-vindo ao Flor 🌸</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.57)",
    margin: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4A2C2A",
  },
  buttons: {
    width: "100%",
    gap: 10,
  },
});
