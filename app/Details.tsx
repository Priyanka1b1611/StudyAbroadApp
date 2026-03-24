// app/Details.tsx
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Details() {
  const { university, country, description } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{university}</Text>
      <Text style={styles.country}>{country}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  country: { fontSize: 18, color: "gray", marginBottom: 15 },
  description: { fontSize: 16, lineHeight: 22 },
});
