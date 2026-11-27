# Architecture

Expo Router provides file-based native navigation. AuthProvider subscribes to Supabase auth state and manages refresh while the app is active. Sessions are persisted through Expo SecureStore. Protected route groups are navigation guards only; enforce data authorization with PostgreSQL RLS and trusted Edge Functions. Use TanStack Query for remote state and Zustand only for shared client state.
