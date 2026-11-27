import "react-native-url-polyfill/auto";
import { createClient, type SupportedStorage } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";
import { env } from "@/src/lib/env";
const secureStorage: SupportedStorage = { getItem: key => SecureStore.getItemAsync(key), setItem: (key,value) => SecureStore.setItemAsync(key,value), removeItem: key => SecureStore.deleteItemAsync(key) };
export const supabase = createClient(env.EXPO_PUBLIC_SUPABASE_URL, env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY, { auth: { storage: secureStorage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: false } });
