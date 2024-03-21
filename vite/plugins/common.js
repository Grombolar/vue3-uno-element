import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

export default function createCommon() {
  return viteCommonjs({
    transformMixedEsModules: true,
  });
}
