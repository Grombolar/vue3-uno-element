import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
export function createAutoImport() {
  return AutoImport({
    dts: true,
    imports: ['vue', 'vue-router', 'pinia'],
    resolvers: [
      ElementPlusResolver({ importStyle: "sass" }),
      IconsResolver({
        prefix: 'Icon',
      }),
    ],
    eslintrc: {
      enabled: false,
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  });
}

export function createComponents() {
  return Components({
    resolvers: [
      IconsResolver({
        enabledCollections: ['ep'],
      }),
      ElementPlusResolver({ importStyle: "sass" }),
    ],
  });
}
export function createIconsImport() {
  return Icons({
    autoInstall: true,
  });
}
