# Tasks

## Implemented
- [x] Expo SDK 58, React Native and Expo Router foundation.
- [x] Strict TypeScript, ESLint flat config, Prettier and Jest setup.
- [x] Supabase client with SecureStore persistence on native and browser storage on web.
- [x] AppState-aware Supabase token refresh lifecycle.
- [x] Email/password registration, sign-in, sign-out and protected route group.
- [x] Email confirmation deep-link callback with PKCE code exchange.
- [x] EAS development, preview and production build profiles.
- [x] Committed npm package-lock.json and clean npm ci installation.
- [x] CI checks for formatting, lint, TypeScript, Jest, high/critical dependency audit, Expo SDK compatibility, Expo Doctor and Expo config.
- [x] Architecture, authentication, development, deployment, environment and security documentation.

## Pending
- [ ] Add React Native Testing Library component tests.
- [ ] Configure EAS project ID, bundle identifiers, credentials and build secrets for the adopter.
- [ ] Test email confirmation and session persistence on physical iOS and Android devices.
- [ ] Verify development, preview and production EAS builds.

## Validation
- GitHub Actions passes all current CI checks, including Expo SDK compatibility and Expo Doctor.
- The npm audit report currently identifies 22 moderate and zero high/critical advisories in the dependency graph. The CI gate blocks high and critical findings; review moderate advisories when updating the SDK/toolchain.
- A valid Supabase project and public environment values are required for runtime authentication.
