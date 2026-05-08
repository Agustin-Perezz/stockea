import { z } from 'zod';

export const magicLinkRequestSchema = z.object({
  email: z.email('Invalid email address')
});

export type MagicLinkRequestDto = z.infer<typeof magicLinkRequestSchema>;
