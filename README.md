# Expo React Native Starter

A cross-platform iOS and Android application foundation using the current Expo SDK 58 release line, Expo Router and Supabase Auth.

## Stack

- Expo SDK 58, React Native and strict TypeScript
- Expo Router file-based navigation
- Supabase Auth
- Expo SecureStore for native session persistence
- Browser local storage for Expo web
- TanStack Query, Zustand and Zod
- Jest with `jest-expo`, ESLint and Prettier
- EAS Build for native distribution

## Requirements

- Node.js 22.13 or newer
- npm 10 or newer
- Expo account and EAS CLI for native builds
- Supabase project for authentication
- iOS Simulator/Xcode on macOS for local iOS simulator builds; Android Studio for local Android emulator builds

## Create an application from this template

Use GitHub's **Use this template** action to create a new repository, then clone it. Update `app.json` with the application name, slug, scheme, iOS bundle identifier and Android package before release.

## Install and configure

```bash
cp .env.example .env
npm ci
```

Set:

- `EXPO_PUBLIC_SUPABASE_URL`
- `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

All `EXPO_PUBLIC_` variables are included in the app bundle. Never add a service-role key or other server secret.

Add the app's deep-link callback URL `appstarter://auth/callback` to the Supabase Auth redirect allow list. The signup flow uses Expo Linking and the callback exchanges the PKCE code for a session.

## Run and validate

```bash
npx expo start
npm run lint
npm run typecheck
npm test
npx expo install --check
npx expo-doctor
```

Use a development build to test native functionality and deep links. Expo Go uses a different URL scheme.

## EAS builds

Configure your EAS project ID and credentials, then use the included profiles:

```bash
eas build --profile development --platform all
eas build --profile preview --platform all
eas build --profile production --platform all
```

Set the two Supabase public environment variables in the relevant EAS environments. Use separate Supabase projects for development and production.

## Included and intentionally excluded

Included: native app routing, SecureStore-backed auth sessions, email/password registration and sign-in, email confirmation deep-link callback, protected route group, app lifecycle-aware token refresh and EAS profiles.

Not included: business-specific screens, fake users, mocked API responses, demo records or service-role credentials. Add domain features only after their data model and offline/security requirements are defined.

See `docs/` and `TASKS.md` for authentication, environment, deployment and implementation status.
