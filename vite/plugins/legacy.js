import legacy from '@vitejs/plugin-legacy';

export default function createLegacy() {
  return legacy({
    targets: ['chrome 49', 'not IE 11'],
    modernPolyfills: true,
  });
}
