import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Image,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Galeria() {
  const [imagens, setImagens] = useState<string[]>([]);

  useEffect(() => {
    const carregarImagens = async () => {
      try {
        const salvo = await AsyncStorage.getItem("galeria");
        if (salvo) {
          setImagens(JSON.parse(salvo));
        }
      } catch (error) {
        console.log("Erro ao carregar imagens:", error);
      }
    };
    carregarImagens();
  }, []);

  useEffect(() => {
    const salvarImagens = async () => {
      try {
        await AsyncStorage.setItem("galeria", JSON.stringify(imagens));
      } catch (error) {
        console.log("Erro ao salvar imagens:", error);
      }
    };
    salvarImagens();
  }, [imagens]);

  const escolherImagem = async () => {
    const { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permissão necessária", "Precisamos acessar suas fotos");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const novasImagens = result.assets.map((asset) => asset.uri);
      setImagens((prev) => [...prev, ...novasImagens]);
    }
  };

  const confirmarDelete = (index: number) => {
    Alert.alert(
      "Deletar imagem",
      "Tem certeza que deseja remover essa foto?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Deletar",
          style: "destructive",
          onPress: () => deletarImagem(index),
        },
      ]
    );
  };

  const deletarImagem = (index: number) => {
    setImagens((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Button title="Adicionar fotos" onPress={escolherImagem} />

      <FlatList
        data={imagens}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item, index }) => (
          <View style={styles.box}>
            <Image source={{ uri: item }} style={styles.imagem} />

            <TouchableOpacity
              style={styles.botaoDelete}
              onPress={() => confirmarDelete(index)}
            >
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={16}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  box: {
    position: "relative",
  },
  imagem: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  botaoDelete: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 15,
    padding: 6,
  },
});