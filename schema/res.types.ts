import { z } from "zod";

export const resSchema = z.object({
  answer: z.string(),
  conversation_id: z.string(),
  question: z.string(),
});

export type ResSchemaType = z.infer<typeof resSchema>;
