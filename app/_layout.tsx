import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="Home" options={{ title: "Study Abroad Programs" }} />
      <Stack.Screen name="Details" options={{ title: "Program Details" }} />
    </Stack>
  );
}
