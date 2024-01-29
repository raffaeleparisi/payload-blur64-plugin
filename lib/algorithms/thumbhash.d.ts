import { z } from 'zod';
export declare const ThumbhashOptionsSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export type ThumbhashOptions = z.infer<typeof ThumbhashOptionsSchema>;
export declare const imageToThumbhash: (data: Buffer, _options: ThumbhashOptions) => Promise<string>;
