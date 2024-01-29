/// <reference types="node" />
import { z } from 'zod';
export type Algorithm = (data: Buffer, options: Record<string, unknown>) => Promise<string>;
type ExtractAlgorithmOptions<T extends Algorithm> = Parameters<T>[1];
export declare const algorithms: {
    blurhash: readonly [(data: Buffer, options: {
        width?: number | undefined;
        height?: number | undefined;
        componentX?: number | undefined;
        componentY?: number | undefined;
    }) => Promise<string>, z.ZodObject<{
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
    }>];
    thumbhash: readonly [(data: Buffer, _options: {}) => Promise<string>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>];
};
type Algorithms = typeof algorithms;
export declare const defaultAlgorithm = "blurhash";
type DefaultAlgorithm = typeof defaultAlgorithm;
export type AlgorithmOptions = {
    [Key in keyof Algorithms]: Algorithms[Key] extends readonly [
        infer Algo extends Algorithm,
        ...unknown[]
    ] ? (Key extends DefaultAlgorithm ? {
        algorithm?: Key;
    } : {
        algorithm: Key;
    }) & ExtractAlgorithmOptions<Algo> : never;
}[keyof Algorithms];
export declare const runAlgorithm: (algorithmType: string, data: Buffer, options: Record<string, unknown>) => Promise<string>;
export {};
