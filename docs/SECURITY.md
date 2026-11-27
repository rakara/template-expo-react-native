# Security

Treat all EXPO_PUBLIC_ values as public. Use the publishable key with RLS; never ship service-role credentials. Persist auth sessions with SecureStore rather than plain AsyncStorage. Route guards are not authorization. Validate access in PostgreSQL RLS and trusted server functions. Do not log tokens or passwords.
