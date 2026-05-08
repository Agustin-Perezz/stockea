import type { ISignInWithMagicLinkRepository } from './sign-in-with-magic-link.repository.interface';

export class SignInWithMagicLinkUseCase {
  constructor(private readonly repository: ISignInWithMagicLinkRepository) {}

  async execute(email: string, redirectTo: string): Promise<void> {
    await this.repository.signInWithOtp(email, redirectTo);
  }
}
