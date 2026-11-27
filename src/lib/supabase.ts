import "react-native-url-polyfill/auto";
import { createClient, type SupportedStorage } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import { env } from "@/src/lib/env";
 
const webStorage: SupportedStorage = {
  getItem: async (key) => (typeof window === "undefined" ? null : window.localStorage.getItem(key)),
  setItem: async (key, value) => {
    if (typeof window !== "undefined") window.localStorage.setItem(key, value);
  },
  removeItem: async (key) => {
    if (typeof window !== "undefined") window.localStorage.removeItem(key);
  },
};

const nativeSecureStorage: SupportedStorage = {
  getItem: (key) => SecureStore.getItemAsync(key),
  setItem: (key, value) => SecureStore.setItemAsync(key, value),
  removeItem: (key) => SecureStore.deleteItemAsync(key),
};

export const supabase = createClient(
  env.EXPO_PUBLIC_SUPABASE_URL,
  env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      storage: Platform.OS === "web" ? webStorage : nativeSecureStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);
