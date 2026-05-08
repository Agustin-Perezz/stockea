import { OAuthProvider } from '$domain/entities/oauth-provider.enum';

export interface SignInWithOAuthRequestDto {
  provider: OAuthProvider;
  redirectTo: string;
}
