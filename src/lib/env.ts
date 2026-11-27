import { z } from "zod";
const schema = z.object({ EXPO_PUBLIC_SUPABASE_URL: z.string().url(), EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1) });
export const env = schema.parse({ EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL, EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY });
