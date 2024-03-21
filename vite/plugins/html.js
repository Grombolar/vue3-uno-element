import { createHtmlPlugin } from 'vite-plugin-html';
export default function createHtml() {
  return createHtmlPlugin({
    minify: true,
    entry: '/src/main.ts',
  });
}
