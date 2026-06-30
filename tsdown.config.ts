import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  exports: true,
  platform: 'neutral',
  entry: ['src/index.ts'],
  format: ['esm'],
  publint: {
    level: 'warning',
  },
  attw: {
    profile: 'esm-only',
    level: 'warn',
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
});
