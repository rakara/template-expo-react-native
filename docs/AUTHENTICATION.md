# Authentication and deep links

The app uses Supabase Auth with email/password credentials. Native sessions are persisted through Expo SecureStore. Expo web uses browser local storage because native SecureStore is unavailable there.

## Supabase Auth configuration

Add the app's deep-link redirect URL to the Supabase project's Authentication URL Configuration allow list. With the default app scheme, the callback is:

`appstarter://auth/callback`

The signup flow uses `Linking.createURL("auth/callback")`. The callback exchanges the PKCE authorization code for a session and then navigates into the authenticated route group.

For local development, verify the exact URL produced by `Linking.createURL` for your selected Expo workflow and add it to the redirect allow list. Use a development build when testing native deep links; Expo Go uses a different URL scheme.

Do not add service-role credentials to app configuration or EAS public environment variables.
