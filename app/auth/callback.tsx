import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { supabase } from "@/src/lib/supabase";

export default function AuthCallbackScreen() {
  const { code } = useLocalSearchParams<{ code?: string }>();

  useEffect(() => {
    let active = true;

    async function exchangeCode() {
      if (typeof code !== "string" || !code) {
        router.replace("/sign-in");
        return;
      }

      try {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!active) return;
        router.replace(error ? "/sign-in" : "/(app)");
      } catch {
        if (active) router.replace("/sign-in");
      }
    }

    void exchangeCode();
    return () => {
      active = false;
    };
  }, [code]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator />
      <Text style={styles.text}>Confirming your account…</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  text: { color: "#64748b" },
});
