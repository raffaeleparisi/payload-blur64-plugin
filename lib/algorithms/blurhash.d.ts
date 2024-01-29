import { z } from 'zod';
export declare const BlurhashOptionsSchema: z.ZodObject<{
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
    componentX: z.ZodOptional<z.ZodNumber>;
    componentY: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    width?: number | undefined;
    height?: number | undefined;
    componentX?: number | undefined;
    componentY?: number | undefined;
}, {
    width?: number | undefined;
    height?: number | undefined;
    componentX?: number | undefined;
    componentY?: number | undefined;
}>;
export type BlurhashOptions = z.infer<typeof BlurhashOptionsSchema>;
export declare const imageToBlurhash: (data: Buffer, options: BlurhashOptions) => Promise<string>;
