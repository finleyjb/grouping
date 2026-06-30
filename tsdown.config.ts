import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  exports: true,
  platform: 'neutral',
  entry: ['src/index.ts'],
});
