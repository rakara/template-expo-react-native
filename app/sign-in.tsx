import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link, router } from "expo-router";
import { supabase } from "@/src/lib/supabase";
export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit() {
    if (!email.trim() || password.length < 8) {
      Alert.alert(
        "Check your details",
        "Enter a valid email and password of at least 8 characters.",
      );
      return;
    }
    setBusy(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error)
        Alert.alert("Sign-in failed", "Check your credentials and try again.");
      else router.replace("/(app)");
    } catch {
      Alert.alert(
        "Connection error",
        "Unable to reach the authentication service. Check your connection and try again.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.eyebrow}>ACCOUNT</Text>
        <Text style={styles.title}>Sign in</Text>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoComplete="password"
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.button} disabled={busy} onPress={submit}>
          <Text style={styles.buttonText}>
            {busy ? "Signing in…" : "Sign in"}
          </Text>
        </Pressable>
        <Text style={styles.muted}>
          New here?{" "}
          <Link href="/sign-up" style={styles.link}>
            Create an account
          </Link>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f7f8fa",
  },
  card: { backgroundColor: "white", padding: 24, borderRadius: 18, gap: 14 },
  eyebrow: { color: "#1d4ed8", fontWeight: "700", letterSpacing: 2 },
  title: { fontSize: 30, fontWeight: "800", color: "#172033", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 9,
    padding: 13,
  },
  button: {
    backgroundColor: "#1d4ed8",
    borderRadius: 9,
    padding: 15,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "700" },
  muted: { color: "#64748b", marginTop: 6 },
  link: { color: "#1d4ed8", fontWeight: "700" },
});
