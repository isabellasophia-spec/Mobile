import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
        }}
        style={styles.banner}
      />

      <Text style={styles.titulo}>🌸 Nosso Jardim</Text>

      <Text style={styles.texto}>
        Este aplicativo foi criado para todos que encontram beleza
        nos pequenos detalhes da natureza.
      </Text>

      <Text style={styles.texto}>
        Aqui você pode guardar suas fotos favoritas de flores,
        criar sua própria coleção e revisitar momentos especiais
        sempre que quiser.
      </Text>

      <Text style={styles.texto}>
        Mais do que um aplicativo, queremos ser um espaço de calma,
        inspiração e conexão com a natureza 🌿
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>🌷 Nossa missão</Text>
        <Text style={styles.cardTexto}>
          Levar leveza, beleza e tranquilidade através das flores,
          transformando memórias em um jardim digital.
        </Text>
      </View>

      <Text style={styles.rodape}>
        Feito com carinho 💚
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF8FB",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#C2185B",
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 10,
    lineHeight: 22,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
    width: "100%",
    elevation: 3,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 5,
  },
  cardTexto: {
    fontSize: 15,
    color: "#666",
  },
  rodape: {
    marginTop: 25,
    fontSize: 14,
    color: "#999",
  },
});