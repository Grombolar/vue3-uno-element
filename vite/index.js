import vue from '@vitejs/plugin-vue';
import { createAutoImport, createComponents, createIconsImport } from './plugins/autoImport';

import createHtml from './plugins/html';
import createLegacy from './plugins/legacy';
import createCommon from './plugins/common';
import createUnocss from './plugins/unocss';
import ElementPlus from 'unplugin-element-plus/vite'

// import createMock from './plugins/mock';
import createVisualizer from './plugins/visualizer';
export default function createVitePlugins(command, mode) {
  const vitePlugins = [];
  vitePlugins.push(vue());
  vitePlugins.push(createAutoImport());
  vitePlugins.push(ElementPlus({ useSource: true }));
  vitePlugins.push(createComponents());
  vitePlugins.push(createIconsImport());
  vitePlugins.push(createUnocss());
  vitePlugins.push(createHtml());
  vitePlugins.push(createLegacy());
  vitePlugins.push(createCommon());
  vitePlugins.push(createVisualizer());
  // vitePlugins.push(createMock(mode));
  return vitePlugins;
}
