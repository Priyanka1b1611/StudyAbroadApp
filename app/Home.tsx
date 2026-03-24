// app/Home.tsx
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";
import ProgramCard from "../components/ProgramCard";
import data from "../data/universities.json";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProgramCard
            program={item}
            onPress={() => router.push({ pathname: "/Details", params: item })}
          />
        )}
      />
    </View>
  );
}
