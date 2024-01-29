import { Config } from 'payload/config';
import { CollectionConfig } from 'payload/types';
import { AlgorithmOptions } from './algorithms';
export type BlurhashPluginOptions = {
    collections?: CollectionConfig['slug'][];
    mimeTypePattern?: string;
} & AlgorithmOptions;
declare const computeBlurhash: (pluginOptions?: BlurhashPluginOptions) => (incomingConfig: Config) => Config;
export default computeBlurhash;
