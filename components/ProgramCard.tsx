// components/ProgramCard.tsx
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Define the type for program
type Program = {
  id: number;
  university: string;
  country: string;
  description: string;
};

type Props = {
  program: Program;
  onPress: () => void;
};

export default function ProgramCard({ program, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{program.university}</Text>
      <Text style={styles.country}>{program.country}</Text>
      <Text numberOfLines={2}>{program.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  country: {
    fontSize: 14,
    color: "gray",
  },
});
