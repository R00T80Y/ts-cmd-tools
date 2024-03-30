import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  ...options,
  treeshake: true,
  splitting: false,
  entry: ['src/index.ts'],
  format: ['cjs'],
  dts: false,
  minify: true,
  clean: false,
  noExternal: ['commander'],
  external: [],
}));
